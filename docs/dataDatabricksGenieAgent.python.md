# `dataDatabricksGenieAgent` Submodule <a name="`dataDatabricksGenieAgent` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgent <a name="DataDatabricksGenieAgent" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgent(
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
  provider_config: DataDatabricksGenieAgentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksGenieAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksGenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath">effective_parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition"></a>

```python
definition: DataDatabricksGenieAgentDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_parent_path`<sup>Required</sup> <a name="effective_parent_path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath"></a>

```python
effective_parent_path: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksGenieAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentConfig <a name="DataDatabricksGenieAgentConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksGenieAgentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}.

---

### DataDatabricksGenieAgentDefinition <a name="DataDatabricksGenieAgentDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition(
  benchmarks: DataDatabricksGenieAgentDefinitionBenchmarks = None,
  config: DataDatabricksGenieAgentDefinitionConfig = None,
  data_sources: DataDatabricksGenieAgentDefinitionDataSources = None,
  instructions: DataDatabricksGenieAgentDefinitionInstructions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks"></a>

```python
benchmarks: DataDatabricksGenieAgentDefinitionBenchmarks
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config"></a>

```python
config: DataDatabricksGenieAgentDefinitionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}.

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources"></a>

```python
data_sources: DataDatabricksGenieAgentDefinitionDataSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions"></a>

```python
instructions: DataDatabricksGenieAgentDefinitionInstructions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarks <a name="DataDatabricksGenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks(
  questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions"></a>

```python
questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions(
  id: str,
  question: str,
  answer: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer] = None,
  evaluation_note: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```python
answer: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}.

---

##### `evaluation_note`<sup>Optional</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer(
  content: str,
  format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}.

---

### DataDatabricksGenieAgentDefinitionConfig <a name="DataDatabricksGenieAgentDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig(
  sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions">sample_questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}. |

---

##### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions"></a>

```python
sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}.

---

### DataDatabricksGenieAgentDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions(
  id: str,
  question: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

### DataDatabricksGenieAgentDefinitionDataSources <a name="DataDatabricksGenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources(
  mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections">mcp_connections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}. |

---

##### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections"></a>

```python
mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables"></a>

```python
tables: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes"></a>

```python
volumes: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections(
  mcp_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}. |

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables(
  identifier: str,
  column_configs: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs] = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs">column_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `column_configs`<sup>Optional</sup> <a name="column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```python
column_configs: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs(
  column: str,
  description: str = None,
  display_name: str = None,
  enable_entity_matching: bool | IResolvable = None,
  enable_format_assistance: bool | IResolvable = None,
  exclude: bool | IResolvable = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `enable_entity_matching`<sup>Optional</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}.

---

##### `enable_format_assistance`<sup>Optional</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes(
  path: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionInstructions <a name="DataDatabricksGenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions(
  example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls">example_question_sqls</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs">join_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions">sql_functions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions">text_instructions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}. |

---

##### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```python
example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}.

---

##### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs"></a>

```python
join_specs: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}.

---

##### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```python
sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}.

---

##### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```python
sql_snippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}.

---

##### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions"></a>

```python
text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls(
  id: str,
  question: str,
  sql: str,
  parameters: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters] = None,
  usage_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```python
parameters: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}.

---

##### `usage_guidance`<sup>Optional</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters(
  name: str,
  default_value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = None,
  description: str = None,
  type_hint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">type_hint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```python
default_value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `type_hint`<sup>Optional</sup> <a name="type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue(
  value_range: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}. |

---

##### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```python
value_range: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange(
  max: str = None,
  min: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```python
max: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```python
min: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs(
  id: str,
  left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft,
  right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight,
  sql: str,
  comment: str = None,
  instruction: str = None,
  relationship_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">relationship_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```python
left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```python
right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `relationship_type`<sup>Optional</sup> <a name="relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions(
  id: str,
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets(
  expressions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```python
expressions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```python
filters: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```python
measures: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions(
  id: str,
  sql: str,
  alias: str = None,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters(
  id: str,
  sql: str,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures(
  id: str,
  sql: str,
  alias: str = None,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions(
  content: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentProviderConfig <a name="DataDatabricksGenieAgentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions">put_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions">reset_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_questions` <a name="put_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```python
def put_questions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]

---

##### `reset_questions` <a name="reset_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```python
def reset_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```python
questions: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `questions_input`<sup>Optional</sup> <a name="questions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```python
questions_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">put_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">reset_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">reset_evaluation_note</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_answer` <a name="put_answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```python
def put_answer(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `reset_answer` <a name="reset_answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```python
def reset_answer() -> None
```

##### `reset_evaluation_note` <a name="reset_evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```python
def reset_evaluation_note() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answer_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluation_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```python
answer: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answer_input`<sup>Optional</sup> <a name="answer_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```python
answer_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `evaluation_note_input`<sup>Optional</sup> <a name="evaluation_note_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```python
evaluation_note_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `evaluation_note`<sup>Required</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarksQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions">put_sample_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions">reset_sample_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sample_questions` <a name="put_sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```python
def put_sample_questions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]

---

##### `reset_sample_questions` <a name="reset_sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```python
def reset_sample_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions">sample_questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">sample_questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sample_questions`<sup>Required</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```python
sample_questions: DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `sample_questions_input`<sup>Optional</sup> <a name="sample_questions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```python
sample_questions_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionConfigSampleQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcp_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connection_input`<sup>Optional</sup> <a name="mcp_connection_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```python
mcp_connection_input: str
```

- *Type:* str

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">put_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables">put_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">reset_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables">reset_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mcp_connections` <a name="put_mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```python
def put_mcp_connections(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]

---

##### `put_tables` <a name="put_tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```python
def put_tables(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]

---

##### `reset_mcp_connections` <a name="reset_mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```python
def reset_mcp_connections() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```python
def reset_tables() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">mcp_connections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcp_connections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">tables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connections`<sup>Required</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```python
mcp_connections: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```python
tables: DataDatabricksGenieAgentDefinitionDataSourcesTablesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```python
volumes: DataDatabricksGenieAgentDefinitionDataSourcesVolumesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `mcp_connections_input`<sup>Optional</sup> <a name="mcp_connections_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```python
mcp_connections_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```python
tables_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">reset_enable_entity_matching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">reset_enable_format_assistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_entity_matching` <a name="reset_enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```python
def reset_enable_entity_matching() -> None
```

##### `reset_enable_format_assistance` <a name="reset_enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```python
def reset_enable_format_assistance() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enable_entity_matching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enable_format_assistance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">exclude_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_entity_matching_input`<sup>Optional</sup> <a name="enable_entity_matching_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```python
enable_entity_matching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance_input`<sup>Optional</sup> <a name="enable_format_assistance_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```python
enable_format_assistance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```python
exclude_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_entity_matching`<sup>Required</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance`<sup>Required</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">put_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">reset_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_configs` <a name="put_column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```python
def put_column_configs(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `reset_column_configs` <a name="reset_column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```python
def reset_column_configs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">column_configs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">column_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_configs`<sup>Required</sup> <a name="column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```python
column_configs: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `column_configs_input`<sup>Optional</sup> <a name="column_configs_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```python
column_configs_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionDataSourcesVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">reset_usage_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_usage_guidance` <a name="reset_usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```python
def reset_usage_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usage_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```python
parameters: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `usage_guidance_input`<sup>Optional</sup> <a name="usage_guidance_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```python
usage_guidance_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `usage_guidance`<sup>Required</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">put_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">reset_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_range` <a name="put_value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```python
def put_value_range(
  max: str = None,
  min: str = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.max"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.min"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}.

---

##### `reset_value_range` <a name="reset_value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```python
def reset_value_range() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">value_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_range`<sup>Required</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```python
value_range: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `value_range_input`<sup>Optional</sup> <a name="value_range_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```python
value_range_input: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```python
max_input: str
```

- *Type:* str

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```python
min_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">reset_type_hint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  value_range: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
) -> None
```

###### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.valueRange"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}.

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type_hint` <a name="reset_type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```python
def reset_type_hint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">type_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">type_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```python
default_value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_hint_input`<sup>Optional</sup> <a name="type_hint_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```python
type_hint_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type_hint`<sup>Required</sup> <a name="type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">put_left</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">put_right</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">reset_relationship_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left` <a name="put_left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```python
def put_left(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `put_right` <a name="put_right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```python
def put_right(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_relationship_type` <a name="reset_relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```python
def reset_relationship_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">left_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationship_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">right_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationship_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```python
left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```python
right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `left_input`<sup>Optional</sup> <a name="left_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```python
left_input: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationship_type_input`<sup>Optional</sup> <a name="relationship_type_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```python
relationship_type_input: str
```

- *Type:* str

---

##### `right_input`<sup>Optional</sup> <a name="right_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```python
right_input: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `relationship_type`<sup>Required</sup> <a name="relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">put_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">put_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">put_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">put_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions">put_text_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">reset_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">reset_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">reset_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">reset_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">reset_text_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example_question_sqls` <a name="put_example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```python
def put_example_question_sqls(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `put_join_specs` <a name="put_join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```python
def put_join_specs(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]

---

##### `put_sql_functions` <a name="put_sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```python
def put_sql_functions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]

---

##### `put_sql_snippets` <a name="put_sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```python
def put_sql_snippets(
  expressions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures] = None
) -> None
```

###### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.expressions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}.

---

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}.

---

###### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.measures"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}.

---

##### `put_text_instructions` <a name="put_text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```python
def put_text_instructions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]

---

##### `reset_example_question_sqls` <a name="reset_example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```python
def reset_example_question_sqls() -> None
```

##### `reset_join_specs` <a name="reset_join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```python
def reset_join_specs() -> None
```

##### `reset_sql_functions` <a name="reset_sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```python
def reset_sql_functions() -> None
```

##### `reset_sql_snippets` <a name="reset_sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```python
def reset_sql_snippets() -> None
```

##### `reset_text_instructions` <a name="reset_text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```python
def reset_text_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">example_question_sqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">join_specs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">sql_functions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions">text_instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">example_question_sqls_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">join_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sql_functions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sql_snippets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">text_instructions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example_question_sqls`<sup>Required</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```python
example_question_sqls: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `join_specs`<sup>Required</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```python
join_specs: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `sql_functions`<sup>Required</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```python
sql_functions: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `sql_snippets`<sup>Required</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```python
sql_snippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `text_instructions`<sup>Required</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```python
text_instructions: DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `example_question_sqls_input`<sup>Optional</sup> <a name="example_question_sqls_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```python
example_question_sqls_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `join_specs_input`<sup>Optional</sup> <a name="join_specs_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```python
join_specs_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]

---

##### `sql_functions_input`<sup>Optional</sup> <a name="sql_functions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```python
sql_functions_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]

---

##### `sql_snippets_input`<sup>Optional</sup> <a name="sql_snippets_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```python
sql_snippets_input: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `text_instructions_input`<sup>Optional</sup> <a name="text_instructions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```python
text_instructions_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">put_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">put_measures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">reset_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">reset_measures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expressions` <a name="put_expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```python
def put_expressions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `put_measures` <a name="put_measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```python
def put_measures(
  value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `reset_expressions` <a name="reset_expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```python
def reset_expressions() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_measures` <a name="reset_measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```python
def reset_measures() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measures_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```python
expressions: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```python
filters: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```python
measures: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressions_input`<sup>Optional</sup> <a name="expressions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```python
expressions_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `measures_input`<sup>Optional</sup> <a name="measures_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```python
measures_input: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentDefinitionInstructionsTextInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentDefinitionOutputReference <a name="DataDatabricksGenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks">put_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources">put_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions">put_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks">reset_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions">reset_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_benchmarks` <a name="put_benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks"></a>

```python
def put_benchmarks(
  questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionBenchmarksQuestions] = None
) -> None
```

###### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks.parameter.questions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}.

---

##### `put_config` <a name="put_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig"></a>

```python
def put_config(
  sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionConfigSampleQuestions] = None
) -> None
```

###### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig.parameter.sampleQuestions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}.

---

##### `put_data_sources` <a name="put_data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources"></a>

```python
def put_data_sources(
  mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionDataSourcesVolumes] = None
) -> None
```

###### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.mcpConnections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}.

---

###### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.tables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}.

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}.

---

##### `put_instructions` <a name="put_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions"></a>

```python
def put_instructions(
  example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentDefinitionInstructionsTextInstructions] = None
) -> None
```

###### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.exampleQuestionSqls"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}.

---

###### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.joinSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}.

---

###### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.sqlFunctions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}.

---

###### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.sqlSnippets"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}.

---

###### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.textInstructions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}.

---

##### `reset_benchmarks` <a name="reset_benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```python
def reset_benchmarks() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_instructions` <a name="reset_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions"></a>

```python
def reset_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput">benchmarks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput">data_sources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput">instructions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks"></a>

```python
benchmarks: DataDatabricksGenieAgentDefinitionBenchmarksOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config"></a>

```python
config: DataDatabricksGenieAgentDefinitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a>

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources"></a>

```python
data_sources: DataDatabricksGenieAgentDefinitionDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions"></a>

```python
instructions: DataDatabricksGenieAgentDefinitionInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a>

---

##### `benchmarks_input`<sup>Optional</sup> <a name="benchmarks_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```python
benchmarks_input: IResolvable | DataDatabricksGenieAgentDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput"></a>

```python
config_input: IResolvable | DataDatabricksGenieAgentDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```python
data_sources_input: IResolvable | DataDatabricksGenieAgentDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```python
instructions_input: IResolvable | DataDatabricksGenieAgentDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentDefinition
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a>

---


### DataDatabricksGenieAgentProviderConfigOutputReference <a name="DataDatabricksGenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agent

dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---



