# `dataDatabricksApps` Submodule <a name="`dataDatabricksApps` Submodule" id="@cdktn/provider-databricks.dataDatabricksApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksApps <a name="DataDatabricksApps" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps databricks_apps}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksApps(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: DataDatabricksAppsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksApps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksApps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksApps.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksApps.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksApps to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app"></a>

```python
app: DataDatabricksAppsAppList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsApp <a name="DataDatabricksAppsApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsApp(
  name: str,
  budget_policy_id: str = None,
  compute_max_instances: typing.Union[int, float] = None,
  compute_min_instances: typing.Union[int, float] = None,
  compute_size: str = None,
  description: str = None,
  git_repository: DataDatabricksAppsAppGitRepository = None,
  resources: IResolvable | typing.List[DataDatabricksAppsAppResources] = None,
  space: str = None,
  telemetry_export_destinations: IResolvable | typing.List[DataDatabricksAppsAppTelemetryExportDestinations] = None,
  usage_policy_id: str = None,
  user_api_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMaxInstances">compute_max_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_max_instances DataDatabricksApps#compute_max_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMinInstances">compute_min_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_min_instances DataDatabricksApps#compute_min_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize">compute_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#resources DataDatabricksApps#resources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space">space</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#space DataDatabricksApps#space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations">telemetry_export_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes">user_api_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}.

---

##### `compute_max_instances`<sup>Optional</sup> <a name="compute_max_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMaxInstances"></a>

```python
compute_max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_max_instances DataDatabricksApps#compute_max_instances}.

---

##### `compute_min_instances`<sup>Optional</sup> <a name="compute_min_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeMinInstances"></a>

```python
compute_min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_min_instances DataDatabricksApps#compute_min_instances}.

---

##### `compute_size`<sup>Optional</sup> <a name="compute_size" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize"></a>

```python
compute_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `git_repository`<sup>Optional</sup> <a name="git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.gitRepository"></a>

```python
git_repository: DataDatabricksAppsAppGitRepository
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources"></a>

```python
resources: IResolvable | typing.List[DataDatabricksAppsAppResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#resources DataDatabricksApps#resources}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.space"></a>

```python
space: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#space DataDatabricksApps#space}.

---

##### `telemetry_export_destinations`<sup>Optional</sup> <a name="telemetry_export_destinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.telemetryExportDestinations"></a>

```python
telemetry_export_destinations: IResolvable | typing.List[DataDatabricksAppsAppTelemetryExportDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}.

---

##### `usage_policy_id`<sup>Optional</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}.

---

##### `user_api_scopes`<sup>Optional</sup> <a name="user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes"></a>

```python
user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}.

---

### DataDatabricksAppsAppActiveDeployment <a name="DataDatabricksAppsAppActiveDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeployment(
  command: typing.List[str] = None,
  deployment_id: str = None,
  env_vars: IResolvable | typing.List[DataDatabricksAppsAppActiveDeploymentEnvVars] = None,
  git_source: DataDatabricksAppsAppActiveDeploymentGitSource = None,
  mode: str = None,
  source_code_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars">env_vars</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `env_vars`<sup>Optional</sup> <a name="env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.envVars"></a>

```python
env_vars: IResolvable | typing.List[DataDatabricksAppsAppActiveDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.gitSource"></a>

```python
git_source: DataDatabricksAppsAppActiveDeploymentGitSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts(
  source_code_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentEnvVars <a name="DataDatabricksAppsAppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars(
  name: str = None,
  value: str = None,
  value_from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom">value_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `value_from`<sup>Optional</sup> <a name="value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppActiveDeploymentGitSource <a name="DataDatabricksAppsAppActiveDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource(
  branch: str = None,
  commit: str = None,
  source_code_path: str = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit">commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.commit"></a>

```python
commit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository(
  provider: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppActiveDeploymentStatus <a name="DataDatabricksAppsAppActiveDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus()
```


### DataDatabricksAppsAppAppStatus <a name="DataDatabricksAppsAppAppStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppAppStatus()
```


### DataDatabricksAppsAppComputeStatus <a name="DataDatabricksAppsAppComputeStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppComputeStatus()
```


### DataDatabricksAppsAppGitRepository <a name="DataDatabricksAppsAppGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppGitRepository(
  provider: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeployment <a name="DataDatabricksAppsAppPendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeployment(
  command: typing.List[str] = None,
  deployment_id: str = None,
  env_vars: IResolvable | typing.List[DataDatabricksAppsAppPendingDeploymentEnvVars] = None,
  git_source: DataDatabricksAppsAppPendingDeploymentGitSource = None,
  mode: str = None,
  source_code_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#command DataDatabricksApps#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars">env_vars</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#command DataDatabricksApps#command}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `env_vars`<sup>Optional</sup> <a name="env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.envVars"></a>

```python
env_vars: IResolvable | typing.List[DataDatabricksAppsAppPendingDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}.

---

##### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.gitSource"></a>

```python
git_source: DataDatabricksAppsAppPendingDeploymentGitSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts(
  source_code_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentEnvVars <a name="DataDatabricksAppsAppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars(
  name: str = None,
  value: str = None,
  value_from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value DataDatabricksApps#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom">value_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value DataDatabricksApps#value}.

---

##### `value_from`<sup>Optional</sup> <a name="value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}.

---

### DataDatabricksAppsAppPendingDeploymentGitSource <a name="DataDatabricksAppsAppPendingDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource(
  branch: str = None,
  commit: str = None,
  source_code_path: str = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit">commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.commit"></a>

```python
commit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

##### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository(
  provider: str,
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

### DataDatabricksAppsAppPendingDeploymentStatus <a name="DataDatabricksAppsAppPendingDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus()
```


### DataDatabricksAppsAppResources <a name="DataDatabricksAppsAppResources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResources(
  name: str,
  app: DataDatabricksAppsAppResourcesApp = None,
  database: DataDatabricksAppsAppResourcesDatabase = None,
  description: str = None,
  experiment: DataDatabricksAppsAppResourcesExperiment = None,
  genie_space: DataDatabricksAppsAppResourcesGenieSpace = None,
  job: DataDatabricksAppsAppResourcesJob = None,
  postgres: DataDatabricksAppsAppResourcesPostgres = None,
  secret: DataDatabricksAppsAppResourcesSecret = None,
  serving_endpoint: DataDatabricksAppsAppResourcesServingEndpoint = None,
  sql_warehouse: DataDatabricksAppsAppResourcesSqlWarehouse = None,
  uc_securable: DataDatabricksAppsAppResourcesUcSecurable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#app DataDatabricksApps#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#job DataDatabricksApps#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#secret DataDatabricksApps#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.app"></a>

```python
app: DataDatabricksAppsAppResourcesApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#app DataDatabricksApps#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database"></a>

```python
database: DataDatabricksAppsAppResourcesDatabase
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.experiment"></a>

```python
experiment: DataDatabricksAppsAppResourcesExperiment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsAppResourcesGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job"></a>

```python
job: DataDatabricksAppsAppResourcesJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#job DataDatabricksApps#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.postgres"></a>

```python
postgres: DataDatabricksAppsAppResourcesPostgres
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret"></a>

```python
secret: DataDatabricksAppsAppResourcesSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#secret DataDatabricksApps#secret}.

---

##### `serving_endpoint`<sup>Optional</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsAppResourcesServingEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}.

---

##### `sql_warehouse`<sup>Optional</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsAppResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}.

---

##### `uc_securable`<sup>Optional</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsAppResourcesUcSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}.

---

### DataDatabricksAppsAppResourcesApp <a name="DataDatabricksAppsAppResourcesApp" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesApp(
  name: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesDatabase <a name="DataDatabricksAppsAppResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase(
  database_name: str,
  instance_name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesExperiment <a name="DataDatabricksAppsAppResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment(
  experiment_id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesGenieSpace <a name="DataDatabricksAppsAppResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace(
  name: str,
  permission: str,
  space_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}.

---

### DataDatabricksAppsAppResourcesJob <a name="DataDatabricksAppsAppResourcesJob" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesJob(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesPostgres <a name="DataDatabricksAppsAppResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres(
  branch: str = None,
  database: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSecret <a name="DataDatabricksAppsAppResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesSecret(
  key: str,
  permission: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#key DataDatabricksApps#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#scope DataDatabricksApps#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#key DataDatabricksApps#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#scope DataDatabricksApps#scope}.

---

### DataDatabricksAppsAppResourcesServingEndpoint <a name="DataDatabricksAppsAppResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint(
  name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSqlWarehouse <a name="DataDatabricksAppsAppResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesUcSecurable <a name="DataDatabricksAppsAppResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable(
  permission: str,
  securable_full_name: str,
  securable_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName">securable_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}.

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}.

---

### DataDatabricksAppsAppTelemetryExportDestinations <a name="DataDatabricksAppsAppTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations(
  unity_catalog: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog">unity_catalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}. |

---

##### `unity_catalog`<sup>Optional</sup> <a name="unity_catalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations.property.unityCatalog"></a>

```python
unity_catalog: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}.

---

### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog(
  logs_table: str,
  metrics_table: str,
  traces_table: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable">logs_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable">metrics_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable">traces_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}. |

---

##### `logs_table`<sup>Required</sup> <a name="logs_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```python
logs_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}.

---

##### `metrics_table`<sup>Required</sup> <a name="metrics_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```python
metrics_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}.

---

##### `traces_table`<sup>Required</sup> <a name="traces_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```python
traces_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}.

---

### DataDatabricksAppsConfig <a name="DataDatabricksAppsConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: DataDatabricksAppsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}.

---

### DataDatabricksAppsProviderConfig <a name="DataDatabricksAppsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsList <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsAppActiveDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]

---


### DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom">reset_value_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_from` <a name="reset_value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```python
def reset_value_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">value_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```python
value_from_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppActiveDeploymentEnvVars
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_commit` <a name="reset_commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">resolved_commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```python
git_repository: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolved_commit`<sup>Required</sup> <a name="resolved_commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```python
resolved_commit: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppActiveDeploymentGitSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---


### DataDatabricksAppsAppActiveDeploymentOutputReference <a name="DataDatabricksAppsAppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars">put_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource">put_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars">reset_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource">reset_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env_vars` <a name="put_env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars"></a>

```python
def put_env_vars(
  value: IResolvable | typing.List[DataDatabricksAppsAppActiveDeploymentEnvVars]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]

---

##### `put_git_source` <a name="put_git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource"></a>

```python
def put_git_source(
  branch: str = None,
  commit: str = None,
  source_code_path: str = None,
  tag: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.commit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

###### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.sourceCodePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.putGitSource.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

##### `reset_command` <a name="reset_command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_env_vars` <a name="reset_env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetEnvVars"></a>

```python
def reset_env_vars() -> None
```

##### `reset_git_source` <a name="reset_git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetGitSource"></a>

```python
def reset_git_source() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts">deployment_artifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars">env_vars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput">env_vars_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput">git_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `deployment_artifacts`<sup>Required</sup> <a name="deployment_artifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```python
deployment_artifacts: DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `env_vars`<sup>Required</sup> <a name="env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVars"></a>

```python
env_vars: DataDatabricksAppsAppActiveDeploymentEnvVarsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVarsList">DataDatabricksAppsAppActiveDeploymentEnvVarsList</a>

---

##### `git_source`<sup>Required</sup> <a name="git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSource"></a>

```python
git_source: DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status"></a>

```python
status: DataDatabricksAppsAppActiveDeploymentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `env_vars_input`<sup>Optional</sup> <a name="env_vars_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.envVarsInput"></a>

```python
env_vars_input: IResolvable | typing.List[DataDatabricksAppsAppActiveDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentEnvVars">DataDatabricksAppsAppActiveDeploymentEnvVars</a>]

---

##### `git_source_input`<sup>Optional</sup> <a name="git_source_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```python
git_source_input: IResolvable | DataDatabricksAppsAppActiveDeploymentGitSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentGitSource">DataDatabricksAppsAppActiveDeploymentGitSource</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppActiveDeployment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a>

---


### DataDatabricksAppsAppActiveDeploymentStatusOutputReference <a name="DataDatabricksAppsAppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppActiveDeploymentStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a>

---


### DataDatabricksAppsAppAppStatusOutputReference <a name="DataDatabricksAppsAppAppStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.runningInstances">running_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `running_instances`<sup>Required</sup> <a name="running_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.runningInstances"></a>

```python
running_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppAppStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a>

---


### DataDatabricksAppsAppComputeStatusOutputReference <a name="DataDatabricksAppsAppComputeStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances">active_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_instances`<sup>Required</sup> <a name="active_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.activeInstances"></a>

```python
active_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppComputeStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a>

---


### DataDatabricksAppsAppGitRepositoryOutputReference <a name="DataDatabricksAppsAppGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppGitRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---


### DataDatabricksAppsAppList <a name="DataDatabricksAppsAppList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsApp]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>]

---


### DataDatabricksAppsAppOutputReference <a name="DataDatabricksAppsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository">put_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations">put_telemetry_export_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMaxInstances">reset_compute_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMinInstances">reset_compute_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize">reset_compute_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository">reset_git_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace">reset_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations">reset_telemetry_export_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId">reset_usage_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes">reset_user_api_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_repository` <a name="put_git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository"></a>

```python
def put_git_repository(
  provider: str,
  url: str
) -> None
```

###### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository.parameter.provider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#provider DataDatabricksApps#provider}.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putGitRepository.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#url DataDatabricksApps#url}.

---

##### `put_resources` <a name="put_resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources"></a>

```python
def put_resources(
  value: IResolvable | typing.List[DataDatabricksAppsAppResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]

---

##### `put_telemetry_export_destinations` <a name="put_telemetry_export_destinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations"></a>

```python
def put_telemetry_export_destinations(
  value: IResolvable | typing.List[DataDatabricksAppsAppTelemetryExportDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]

---

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_compute_max_instances` <a name="reset_compute_max_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMaxInstances"></a>

```python
def reset_compute_max_instances() -> None
```

##### `reset_compute_min_instances` <a name="reset_compute_min_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeMinInstances"></a>

```python
def reset_compute_min_instances() -> None
```

##### `reset_compute_size` <a name="reset_compute_size" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize"></a>

```python
def reset_compute_size() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_git_repository` <a name="reset_git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetGitRepository"></a>

```python
def reset_git_repository() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_space` <a name="reset_space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetSpace"></a>

```python
def reset_space() -> None
```

##### `reset_telemetry_export_destinations` <a name="reset_telemetry_export_destinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetTelemetryExportDestinations"></a>

```python
def reset_telemetry_export_destinations() -> None
```

##### `reset_usage_policy_id` <a name="reset_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUsagePolicyId"></a>

```python
def reset_usage_policy_id() -> None
```

##### `reset_user_api_scopes` <a name="reset_user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes"></a>

```python
def reset_user_api_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment">active_deployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus">app_status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus">compute_status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath">default_source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId">effective_budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes">effective_user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId">oauth2_app_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId">oauth2_app_integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment">pending_deployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId">service_principal_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations">telemetry_export_destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl">thumbnail_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater">updater</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstancesInput">compute_max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstancesInput">compute_min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput">compute_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput">git_repository_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput">telemetry_export_destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput">usage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput">user_api_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstances">compute_max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstances">compute_min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize">compute_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space">space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes">user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_deployment`<sup>Required</sup> <a name="active_deployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment"></a>

```python
active_deployment: DataDatabricksAppsAppActiveDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a>

---

##### `app_status`<sup>Required</sup> <a name="app_status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus"></a>

```python
app_status: DataDatabricksAppsAppAppStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a>

---

##### `compute_status`<sup>Required</sup> <a name="compute_status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus"></a>

```python
compute_status: DataDatabricksAppsAppComputeStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `default_source_code_path`<sup>Required</sup> <a name="default_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath"></a>

```python
default_source_code_path: str
```

- *Type:* str

---

##### `effective_budget_policy_id`<sup>Required</sup> <a name="effective_budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId"></a>

```python
effective_budget_policy_id: str
```

- *Type:* str

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `effective_user_api_scopes`<sup>Required</sup> <a name="effective_user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes"></a>

```python
effective_user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepository"></a>

```python
git_repository: DataDatabricksAppsAppGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepositoryOutputReference">DataDatabricksAppsAppGitRepositoryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oauth2_app_client_id`<sup>Required</sup> <a name="oauth2_app_client_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId"></a>

```python
oauth2_app_client_id: str
```

- *Type:* str

---

##### `oauth2_app_integration_id`<sup>Required</sup> <a name="oauth2_app_integration_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId"></a>

```python
oauth2_app_integration_id: str
```

- *Type:* str

---

##### `pending_deployment`<sup>Required</sup> <a name="pending_deployment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment"></a>

```python
pending_deployment: DataDatabricksAppsAppPendingDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources"></a>

```python
resources: DataDatabricksAppsAppResourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a>

---

##### `service_principal_client_id`<sup>Required</sup> <a name="service_principal_client_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId"></a>

```python
service_principal_client_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `telemetry_export_destinations`<sup>Required</sup> <a name="telemetry_export_destinations" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinations"></a>

```python
telemetry_export_destinations: DataDatabricksAppsAppTelemetryExportDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList">DataDatabricksAppsAppTelemetryExportDestinationsList</a>

---

##### `thumbnail_url`<sup>Required</sup> <a name="thumbnail_url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.thumbnailUrl"></a>

```python
thumbnail_url: str
```

- *Type:* str

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater"></a>

```python
updater: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `compute_max_instances_input`<sup>Optional</sup> <a name="compute_max_instances_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstancesInput"></a>

```python
compute_max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_min_instances_input`<sup>Optional</sup> <a name="compute_min_instances_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstancesInput"></a>

```python
compute_min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_size_input`<sup>Optional</sup> <a name="compute_size_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput"></a>

```python
compute_size_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `git_repository_input`<sup>Optional</sup> <a name="git_repository_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.gitRepositoryInput"></a>

```python
git_repository_input: IResolvable | DataDatabricksAppsAppGitRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppGitRepository">DataDatabricksAppsAppGitRepository</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput"></a>

```python
resources_input: IResolvable | typing.List[DataDatabricksAppsAppResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `telemetry_export_destinations_input`<sup>Optional</sup> <a name="telemetry_export_destinations_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.telemetryExportDestinationsInput"></a>

```python
telemetry_export_destinations_input: IResolvable | typing.List[DataDatabricksAppsAppTelemetryExportDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]

---

##### `usage_policy_id_input`<sup>Optional</sup> <a name="usage_policy_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyIdInput"></a>

```python
usage_policy_id_input: str
```

- *Type:* str

---

##### `user_api_scopes_input`<sup>Optional</sup> <a name="user_api_scopes_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput"></a>

```python
user_api_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `compute_max_instances`<sup>Required</sup> <a name="compute_max_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMaxInstances"></a>

```python
compute_max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_min_instances`<sup>Required</sup> <a name="compute_min_instances" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeMinInstances"></a>

```python
compute_min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_size`<sup>Required</sup> <a name="compute_size" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize"></a>

```python
compute_size: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.space"></a>

```python
space: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `user_api_scopes`<sup>Required</sup> <a name="user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes"></a>

```python
user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>

---


### DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsList <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsAppPendingDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]

---


### DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom">reset_value_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_from` <a name="reset_value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```python
def reset_value_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">value_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom">value_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```python
value_from_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```python
value_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppPendingDeploymentEnvVars
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference <a name="DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit">reset_commit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_commit` <a name="reset_commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```python
def reset_commit() -> None
```

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository">git_repository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">resolved_commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput">commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_repository`<sup>Required</sup> <a name="git_repository" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```python
git_repository: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolved_commit`<sup>Required</sup> <a name="resolved_commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```python
resolved_commit: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `commit_input`<sup>Optional</sup> <a name="commit_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```python
commit_input: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```python
commit: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppPendingDeploymentGitSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---


### DataDatabricksAppsAppPendingDeploymentOutputReference <a name="DataDatabricksAppsAppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars">put_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource">put_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars">reset_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource">reset_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath">reset_source_code_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env_vars` <a name="put_env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars"></a>

```python
def put_env_vars(
  value: IResolvable | typing.List[DataDatabricksAppsAppPendingDeploymentEnvVars]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]

---

##### `put_git_source` <a name="put_git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource"></a>

```python
def put_git_source(
  branch: str = None,
  commit: str = None,
  source_code_path: str = None,
  tag: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

###### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.commit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#commit DataDatabricksApps#commit}.

---

###### `source_code_path`<sup>Optional</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.sourceCodePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.putGitSource.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#tag DataDatabricksApps#tag}.

---

##### `reset_command` <a name="reset_command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_env_vars` <a name="reset_env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetEnvVars"></a>

```python
def reset_env_vars() -> None
```

##### `reset_git_source` <a name="reset_git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetGitSource"></a>

```python
def reset_git_source() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source_code_path` <a name="reset_source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```python
def reset_source_code_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts">deployment_artifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars">env_vars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput">env_vars_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput">git_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput">source_code_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath">source_code_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `deployment_artifacts`<sup>Required</sup> <a name="deployment_artifacts" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```python
deployment_artifacts: DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `env_vars`<sup>Required</sup> <a name="env_vars" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVars"></a>

```python
env_vars: DataDatabricksAppsAppPendingDeploymentEnvVarsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVarsList">DataDatabricksAppsAppPendingDeploymentEnvVarsList</a>

---

##### `git_source`<sup>Required</sup> <a name="git_source" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSource"></a>

```python
git_source: DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status"></a>

```python
status: DataDatabricksAppsAppPendingDeploymentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `env_vars_input`<sup>Optional</sup> <a name="env_vars_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.envVarsInput"></a>

```python
env_vars_input: IResolvable | typing.List[DataDatabricksAppsAppPendingDeploymentEnvVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentEnvVars">DataDatabricksAppsAppPendingDeploymentEnvVars</a>]

---

##### `git_source_input`<sup>Optional</sup> <a name="git_source_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```python
git_source_input: IResolvable | DataDatabricksAppsAppPendingDeploymentGitSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentGitSource">DataDatabricksAppsAppPendingDeploymentGitSource</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_code_path_input`<sup>Optional</sup> <a name="source_code_path_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```python
source_code_path_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source_code_path`<sup>Required</sup> <a name="source_code_path" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```python
source_code_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppPendingDeployment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a>

---


### DataDatabricksAppsAppPendingDeploymentStatusOutputReference <a name="DataDatabricksAppsAppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsAppPendingDeploymentStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a>

---


### DataDatabricksAppsAppResourcesAppOutputReference <a name="DataDatabricksAppsAppResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---


### DataDatabricksAppsAppResourcesDatabaseOutputReference <a name="DataDatabricksAppsAppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---


### DataDatabricksAppsAppResourcesExperimentOutputReference <a name="DataDatabricksAppsAppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---


### DataDatabricksAppsAppResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsAppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---


### DataDatabricksAppsAppResourcesJobOutputReference <a name="DataDatabricksAppsAppResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---


### DataDatabricksAppsAppResourcesList <a name="DataDatabricksAppsAppResourcesList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsAppResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsAppResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>]

---


### DataDatabricksAppsAppResourcesOutputReference <a name="DataDatabricksAppsAppResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp">put_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment">put_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace">put_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob">put_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres">put_postgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint">put_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse">put_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable">put_uc_securable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment">reset_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace">reset_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob">reset_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres">reset_postgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint">reset_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse">reset_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable">reset_uc_securable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app` <a name="put_app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp"></a>

```python
def put_app(
  name: str = None,
  permission: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

###### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putApp.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_database` <a name="put_database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase"></a>

```python
def put_database(
  database_name: str,
  instance_name: str,
  permission: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}.

---

###### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_experiment` <a name="put_experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment"></a>

```python
def put_experiment(
  experiment_id: str,
  permission: str
) -> None
```

###### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putExperiment.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_genie_space` <a name="put_genie_space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace"></a>

```python
def put_genie_space(
  name: str,
  permission: str,
  space_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

###### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}.

---

##### `put_job` <a name="put_job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob"></a>

```python
def put_job(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_postgres` <a name="put_postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres"></a>

```python
def put_postgres(
  branch: str = None,
  database: str = None,
  permission: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#branch DataDatabricksApps#branch}.

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

###### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putPostgres.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret"></a>

```python
def put_secret(
  key: str,
  permission: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#key DataDatabricksApps#key}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#scope DataDatabricksApps#scope}.

---

##### `put_serving_endpoint` <a name="put_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint"></a>

```python
def put_serving_endpoint(
  name: str,
  permission: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_sql_warehouse` <a name="put_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse"></a>

```python
def put_sql_warehouse(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `put_uc_securable` <a name="put_uc_securable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable"></a>

```python
def put_uc_securable(
  permission: str,
  securable_full_name: str,
  securable_type: str
) -> None
```

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

###### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.securableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}.

---

###### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}.

---

##### `reset_app` <a name="reset_app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_experiment` <a name="reset_experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetExperiment"></a>

```python
def reset_experiment() -> None
```

##### `reset_genie_space` <a name="reset_genie_space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace"></a>

```python
def reset_genie_space() -> None
```

##### `reset_job` <a name="reset_job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob"></a>

```python
def reset_job() -> None
```

##### `reset_postgres` <a name="reset_postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetPostgres"></a>

```python
def reset_postgres() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_serving_endpoint` <a name="reset_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint"></a>

```python
def reset_serving_endpoint() -> None
```

##### `reset_sql_warehouse` <a name="reset_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse"></a>

```python
def reset_sql_warehouse() -> None
```

##### `reset_uc_securable` <a name="reset_uc_securable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable"></a>

```python
def reset_uc_securable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput">app_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput">experiment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput">genie_space_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput">job_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput">postgres_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput">serving_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput">sql_warehouse_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput">uc_securable_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.app"></a>

```python
app: DataDatabricksAppsAppResourcesAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesAppOutputReference">DataDatabricksAppsAppResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database"></a>

```python
database: DataDatabricksAppsAppResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experiment"></a>

```python
experiment: DataDatabricksAppsAppResourcesExperimentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperimentOutputReference">DataDatabricksAppsAppResourcesExperimentOutputReference</a>

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsAppResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job"></a>

```python
job: DataDatabricksAppsAppResourcesJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgres"></a>

```python
postgres: DataDatabricksAppsAppResourcesPostgresOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference">DataDatabricksAppsAppResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret"></a>

```python
secret: DataDatabricksAppsAppResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a>

---

##### `serving_endpoint`<sup>Required</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsAppResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a>

---

##### `sql_warehouse`<sup>Required</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsAppResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a>

---

##### `uc_securable`<sup>Required</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsAppResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.appInput"></a>

```python
app_input: IResolvable | DataDatabricksAppsAppResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesApp">DataDatabricksAppsAppResourcesApp</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | DataDatabricksAppsAppResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_input`<sup>Optional</sup> <a name="experiment_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.experimentInput"></a>

```python
experiment_input: IResolvable | DataDatabricksAppsAppResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesExperiment">DataDatabricksAppsAppResourcesExperiment</a>

---

##### `genie_space_input`<sup>Optional</sup> <a name="genie_space_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput"></a>

```python
genie_space_input: IResolvable | DataDatabricksAppsAppResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `job_input`<sup>Optional</sup> <a name="job_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput"></a>

```python
job_input: IResolvable | DataDatabricksAppsAppResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `postgres_input`<sup>Optional</sup> <a name="postgres_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.postgresInput"></a>

```python
postgres_input: IResolvable | DataDatabricksAppsAppResourcesPostgres
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput"></a>

```python
secret_input: IResolvable | DataDatabricksAppsAppResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `serving_endpoint_input`<sup>Optional</sup> <a name="serving_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput"></a>

```python
serving_endpoint_input: IResolvable | DataDatabricksAppsAppResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `sql_warehouse_input`<sup>Optional</sup> <a name="sql_warehouse_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput"></a>

```python
sql_warehouse_input: IResolvable | DataDatabricksAppsAppResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `uc_securable_input`<sup>Optional</sup> <a name="uc_securable_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput"></a>

```python
uc_securable_input: IResolvable | DataDatabricksAppsAppResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources">DataDatabricksAppsAppResources</a>

---


### DataDatabricksAppsAppResourcesPostgresOutputReference <a name="DataDatabricksAppsAppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgresOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesPostgres
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesPostgres">DataDatabricksAppsAppResourcesPostgres</a>

---


### DataDatabricksAppsAppResourcesSecretOutputReference <a name="DataDatabricksAppsAppResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---


### DataDatabricksAppsAppResourcesServingEndpointOutputReference <a name="DataDatabricksAppsAppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---


### DataDatabricksAppsAppResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsAppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---


### DataDatabricksAppsAppResourcesUcSecurableOutputReference <a name="DataDatabricksAppsAppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind">securable_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput">securable_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName">securable_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `securable_kind`<sup>Required</sup> <a name="securable_kind" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `securable_full_name_input`<sup>Optional</sup> <a name="securable_full_name_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```python
securable_full_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsList <a name="DataDatabricksAppsAppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsAppTelemetryExportDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsAppTelemetryExportDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>]

---


### DataDatabricksAppsAppTelemetryExportDestinationsOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog">put_unity_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog">reset_unity_catalog</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_unity_catalog` <a name="put_unity_catalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```python
def put_unity_catalog(
  logs_table: str,
  metrics_table: str,
  traces_table: str
) -> None
```

###### `logs_table`<sup>Required</sup> <a name="logs_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.logsTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}.

---

###### `metrics_table`<sup>Required</sup> <a name="metrics_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.metricsTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}.

---

###### `traces_table`<sup>Required</sup> <a name="traces_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.tracesTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}.

---

##### `reset_unity_catalog` <a name="reset_unity_catalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```python
def reset_unity_catalog() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog">unity_catalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">unity_catalog_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unity_catalog`<sup>Required</sup> <a name="unity_catalog" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```python
unity_catalog: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `unity_catalog_input`<sup>Optional</sup> <a name="unity_catalog_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```python
unity_catalog_input: IResolvable | DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppTelemetryExportDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinations">DataDatabricksAppsAppTelemetryExportDestinations</a>

---


### DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference <a name="DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">logs_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">metrics_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">traces_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">logs_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">metrics_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">traces_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logs_table_input`<sup>Optional</sup> <a name="logs_table_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```python
logs_table_input: str
```

- *Type:* str

---

##### `metrics_table_input`<sup>Optional</sup> <a name="metrics_table_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```python
metrics_table_input: str
```

- *Type:* str

---

##### `traces_table_input`<sup>Optional</sup> <a name="traces_table_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```python
traces_table_input: str
```

- *Type:* str

---

##### `logs_table`<sup>Required</sup> <a name="logs_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```python
logs_table: str
```

- *Type:* str

---

##### `metrics_table`<sup>Required</sup> <a name="metrics_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```python
metrics_table: str
```

- *Type:* str

---

##### `traces_table`<sup>Required</sup> <a name="traces_table" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```python
traces_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog</a>

---


### DataDatabricksAppsProviderConfigOutputReference <a name="DataDatabricksAppsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps

dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---



