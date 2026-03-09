# `dataDatabricksAppsSpace` Submodule <a name="`dataDatabricksAppsSpace` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppsSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSpace <a name="DataDatabricksAppsSpace" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space databricks_apps_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpace(
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
  provider_config: DataDatabricksAppsSpaceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#provider_config DataDatabricksAppsSpace#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#provider_config DataDatabricksAppsSpace#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#workspace_id DataDatabricksAppsSpace#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAppsSpace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAppsSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAppsSpace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAppsSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.effectiveUserApiScopes">effective_user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.oauth2AppClientId">oauth2_app_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.oauth2AppIntegrationId">oauth2_app_integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference">DataDatabricksAppsSpaceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList">DataDatabricksAppsSpaceResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalClientId">service_principal_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference">DataDatabricksAppsSpaceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.updater">updater</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.userApiScopes">user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `effective_user_api_scopes`<sup>Required</sup> <a name="effective_user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.effectiveUserApiScopes"></a>

```python
effective_user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oauth2_app_client_id`<sup>Required</sup> <a name="oauth2_app_client_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.oauth2AppClientId"></a>

```python
oauth2_app_client_id: str
```

- *Type:* str

---

##### `oauth2_app_integration_id`<sup>Required</sup> <a name="oauth2_app_integration_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.oauth2AppIntegrationId"></a>

```python
oauth2_app_integration_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpaceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference">DataDatabricksAppsSpaceProviderConfigOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.resources"></a>

```python
resources: DataDatabricksAppsSpaceResourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList">DataDatabricksAppsSpaceResourcesList</a>

---

##### `service_principal_client_id`<sup>Required</sup> <a name="service_principal_client_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalClientId"></a>

```python
service_principal_client_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.status"></a>

```python
status: DataDatabricksAppsSpaceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference">DataDatabricksAppsSpaceStatusOutputReference</a>

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.updater"></a>

```python
updater: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `user_api_scopes`<sup>Required</sup> <a name="user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.userApiScopes"></a>

```python
user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppsSpaceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSpaceConfig <a name="DataDatabricksAppsSpaceConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAppsSpaceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#provider_config DataDatabricksAppsSpace#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpaceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#provider_config DataDatabricksAppsSpace#provider_config}.

---

### DataDatabricksAppsSpaceProviderConfig <a name="DataDatabricksAppsSpaceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#workspace_id DataDatabricksAppsSpace#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#workspace_id DataDatabricksAppsSpace#workspace_id}.

---

### DataDatabricksAppsSpaceResources <a name="DataDatabricksAppsSpaceResources" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources(
  name: str,
  app: DataDatabricksAppsSpaceResourcesApp = None,
  database: DataDatabricksAppsSpaceResourcesDatabase = None,
  description: str = None,
  experiment: DataDatabricksAppsSpaceResourcesExperiment = None,
  genie_space: DataDatabricksAppsSpaceResourcesGenieSpace = None,
  job: DataDatabricksAppsSpaceResourcesJob = None,
  secret: DataDatabricksAppsSpaceResourcesSecret = None,
  serving_endpoint: DataDatabricksAppsSpaceResourcesServingEndpoint = None,
  sql_warehouse: DataDatabricksAppsSpaceResourcesSqlWarehouse = None,
  uc_securable: DataDatabricksAppsSpaceResourcesUcSecurable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#app DataDatabricksAppsSpace#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#database DataDatabricksAppsSpace#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#description DataDatabricksAppsSpace#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#experiment DataDatabricksAppsSpace#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#genie_space DataDatabricksAppsSpace#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#job DataDatabricksAppsSpace#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#secret DataDatabricksAppsSpace#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#serving_endpoint DataDatabricksAppsSpace#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#sql_warehouse DataDatabricksAppsSpace#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#uc_securable DataDatabricksAppsSpace#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.app"></a>

```python
app: DataDatabricksAppsSpaceResourcesApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#app DataDatabricksAppsSpace#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.database"></a>

```python
database: DataDatabricksAppsSpaceResourcesDatabase
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#database DataDatabricksAppsSpace#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#description DataDatabricksAppsSpace#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.experiment"></a>

```python
experiment: DataDatabricksAppsSpaceResourcesExperiment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#experiment DataDatabricksAppsSpace#experiment}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsSpaceResourcesGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#genie_space DataDatabricksAppsSpace#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.job"></a>

```python
job: DataDatabricksAppsSpaceResourcesJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#job DataDatabricksAppsSpace#job}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.secret"></a>

```python
secret: DataDatabricksAppsSpaceResourcesSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#secret DataDatabricksAppsSpace#secret}.

---

##### `serving_endpoint`<sup>Optional</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsSpaceResourcesServingEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#serving_endpoint DataDatabricksAppsSpace#serving_endpoint}.

---

##### `sql_warehouse`<sup>Optional</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsSpaceResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#sql_warehouse DataDatabricksAppsSpace#sql_warehouse}.

---

##### `uc_securable`<sup>Optional</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsSpaceResourcesUcSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#uc_securable DataDatabricksAppsSpace#uc_securable}.

---

### DataDatabricksAppsSpaceResourcesApp <a name="DataDatabricksAppsSpaceResourcesApp" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp()
```


### DataDatabricksAppsSpaceResourcesDatabase <a name="DataDatabricksAppsSpaceResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase(
  database_name: str,
  instance_name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#database_name DataDatabricksAppsSpace#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#instance_name DataDatabricksAppsSpace#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#database_name DataDatabricksAppsSpace#database_name}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#instance_name DataDatabricksAppsSpace#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

### DataDatabricksAppsSpaceResourcesExperiment <a name="DataDatabricksAppsSpaceResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment(
  experiment_id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#experiment_id DataDatabricksAppsSpace#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#experiment_id DataDatabricksAppsSpace#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

### DataDatabricksAppsSpaceResourcesGenieSpace <a name="DataDatabricksAppsSpaceResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace(
  name: str,
  permission: str,
  space_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#space_id DataDatabricksAppsSpace#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#space_id DataDatabricksAppsSpace#space_id}.

---

### DataDatabricksAppsSpaceResourcesJob <a name="DataDatabricksAppsSpaceResourcesJob" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

### DataDatabricksAppsSpaceResourcesSecret <a name="DataDatabricksAppsSpaceResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret(
  key: str,
  permission: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#key DataDatabricksAppsSpace#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#scope DataDatabricksAppsSpace#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#key DataDatabricksAppsSpace#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#scope DataDatabricksAppsSpace#scope}.

---

### DataDatabricksAppsSpaceResourcesServingEndpoint <a name="DataDatabricksAppsSpaceResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint(
  name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

### DataDatabricksAppsSpaceResourcesSqlWarehouse <a name="DataDatabricksAppsSpaceResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

### DataDatabricksAppsSpaceResourcesUcSecurable <a name="DataDatabricksAppsSpaceResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable(
  permission: str,
  securable_full_name: str,
  securable_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.securableFullName">securable_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_full_name DataDatabricksAppsSpace#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_type DataDatabricksAppsSpace#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_full_name DataDatabricksAppsSpace#securable_full_name}.

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_type DataDatabricksAppsSpace#securable_type}.

---

### DataDatabricksAppsSpaceStatus <a name="DataDatabricksAppsSpaceStatus" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSpaceProviderConfigOutputReference <a name="DataDatabricksAppsSpaceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceProviderConfig">DataDatabricksAppsSpaceProviderConfig</a>

---


### DataDatabricksAppsSpaceResourcesAppOutputReference <a name="DataDatabricksAppsSpaceResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a>

---


### DataDatabricksAppsSpaceResourcesDatabaseOutputReference <a name="DataDatabricksAppsSpaceResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a>

---


### DataDatabricksAppsSpaceResourcesExperimentOutputReference <a name="DataDatabricksAppsSpaceResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a>

---


### DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a>

---


### DataDatabricksAppsSpaceResourcesJobOutputReference <a name="DataDatabricksAppsSpaceResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a>

---


### DataDatabricksAppsSpaceResourcesList <a name="DataDatabricksAppsSpaceResourcesList" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsSpaceResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources">DataDatabricksAppsSpaceResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsSpaceResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources">DataDatabricksAppsSpaceResources</a>]

---


### DataDatabricksAppsSpaceResourcesOutputReference <a name="DataDatabricksAppsSpaceResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putApp">put_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putExperiment">put_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putGenieSpace">put_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putJob">put_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putServingEndpoint">put_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSqlWarehouse">put_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putUcSecurable">put_uc_securable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetExperiment">reset_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetGenieSpace">reset_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetJob">reset_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetServingEndpoint">reset_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetSqlWarehouse">reset_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetUcSecurable">reset_uc_securable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app` <a name="put_app" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putApp"></a>

```python
def put_app() -> None
```

##### `put_database` <a name="put_database" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putDatabase"></a>

```python
def put_database(
  database_name: str,
  instance_name: str,
  permission: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putDatabase.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#database_name DataDatabricksAppsSpace#database_name}.

---

###### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putDatabase.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#instance_name DataDatabricksAppsSpace#instance_name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putDatabase.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `put_experiment` <a name="put_experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putExperiment"></a>

```python
def put_experiment(
  experiment_id: str,
  permission: str
) -> None
```

###### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putExperiment.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#experiment_id DataDatabricksAppsSpace#experiment_id}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putExperiment.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `put_genie_space` <a name="put_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putGenieSpace"></a>

```python
def put_genie_space(
  name: str,
  permission: str,
  space_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putGenieSpace.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putGenieSpace.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

###### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putGenieSpace.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#space_id DataDatabricksAppsSpace#space_id}.

---

##### `put_job` <a name="put_job" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putJob"></a>

```python
def put_job(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putJob.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putJob.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSecret"></a>

```python
def put_secret(
  key: str,
  permission: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSecret.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#key DataDatabricksAppsSpace#key}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSecret.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSecret.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#scope DataDatabricksAppsSpace#scope}.

---

##### `put_serving_endpoint` <a name="put_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putServingEndpoint"></a>

```python
def put_serving_endpoint(
  name: str,
  permission: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putServingEndpoint.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#name DataDatabricksAppsSpace#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putServingEndpoint.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `put_sql_warehouse` <a name="put_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSqlWarehouse"></a>

```python
def put_sql_warehouse(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSqlWarehouse.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#id DataDatabricksAppsSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putSqlWarehouse.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

##### `put_uc_securable` <a name="put_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putUcSecurable"></a>

```python
def put_uc_securable(
  permission: str,
  securable_full_name: str,
  securable_type: str
) -> None
```

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putUcSecurable.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#permission DataDatabricksAppsSpace#permission}.

---

###### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putUcSecurable.parameter.securableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_full_name DataDatabricksAppsSpace#securable_full_name}.

---

###### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.putUcSecurable.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_space#securable_type DataDatabricksAppsSpace#securable_type}.

---

##### `reset_app` <a name="reset_app" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_experiment` <a name="reset_experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetExperiment"></a>

```python
def reset_experiment() -> None
```

##### `reset_genie_space` <a name="reset_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetGenieSpace"></a>

```python
def reset_genie_space() -> None
```

##### `reset_job` <a name="reset_job" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetJob"></a>

```python
def reset_job() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_serving_endpoint` <a name="reset_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetServingEndpoint"></a>

```python
def reset_serving_endpoint() -> None
```

##### `reset_sql_warehouse` <a name="reset_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetSqlWarehouse"></a>

```python
def reset_sql_warehouse() -> None
```

##### `reset_uc_securable` <a name="reset_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.resetUcSecurable"></a>

```python
def reset_uc_securable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference">DataDatabricksAppsSpaceResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference">DataDatabricksAppsSpaceResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference">DataDatabricksAppsSpaceResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference">DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference">DataDatabricksAppsSpaceResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference">DataDatabricksAppsSpaceResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference">DataDatabricksAppsSpaceResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference">DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference">DataDatabricksAppsSpaceResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.appInput">app_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.experimentInput">experiment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.genieSpaceInput">genie_space_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.jobInput">job_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.servingEndpointInput">serving_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.sqlWarehouseInput">sql_warehouse_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.ucSecurableInput">uc_securable_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources">DataDatabricksAppsSpaceResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.app"></a>

```python
app: DataDatabricksAppsSpaceResourcesAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesAppOutputReference">DataDatabricksAppsSpaceResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.database"></a>

```python
database: DataDatabricksAppsSpaceResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabaseOutputReference">DataDatabricksAppsSpaceResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.experiment"></a>

```python
experiment: DataDatabricksAppsSpaceResourcesExperimentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperimentOutputReference">DataDatabricksAppsSpaceResourcesExperimentOutputReference</a>

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference">DataDatabricksAppsSpaceResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.job"></a>

```python
job: DataDatabricksAppsSpaceResourcesJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJobOutputReference">DataDatabricksAppsSpaceResourcesJobOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.secret"></a>

```python
secret: DataDatabricksAppsSpaceResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference">DataDatabricksAppsSpaceResourcesSecretOutputReference</a>

---

##### `serving_endpoint`<sup>Required</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsSpaceResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference">DataDatabricksAppsSpaceResourcesServingEndpointOutputReference</a>

---

##### `sql_warehouse`<sup>Required</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference">DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference</a>

---

##### `uc_securable`<sup>Required</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsSpaceResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference">DataDatabricksAppsSpaceResourcesUcSecurableOutputReference</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.appInput"></a>

```python
app_input: IResolvable | DataDatabricksAppsSpaceResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesApp">DataDatabricksAppsSpaceResourcesApp</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | DataDatabricksAppsSpaceResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesDatabase">DataDatabricksAppsSpaceResourcesDatabase</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_input`<sup>Optional</sup> <a name="experiment_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.experimentInput"></a>

```python
experiment_input: IResolvable | DataDatabricksAppsSpaceResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesExperiment">DataDatabricksAppsSpaceResourcesExperiment</a>

---

##### `genie_space_input`<sup>Optional</sup> <a name="genie_space_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.genieSpaceInput"></a>

```python
genie_space_input: IResolvable | DataDatabricksAppsSpaceResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesGenieSpace">DataDatabricksAppsSpaceResourcesGenieSpace</a>

---

##### `job_input`<sup>Optional</sup> <a name="job_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.jobInput"></a>

```python
job_input: IResolvable | DataDatabricksAppsSpaceResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesJob">DataDatabricksAppsSpaceResourcesJob</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.secretInput"></a>

```python
secret_input: IResolvable | DataDatabricksAppsSpaceResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a>

---

##### `serving_endpoint_input`<sup>Optional</sup> <a name="serving_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.servingEndpointInput"></a>

```python
serving_endpoint_input: IResolvable | DataDatabricksAppsSpaceResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a>

---

##### `sql_warehouse_input`<sup>Optional</sup> <a name="sql_warehouse_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.sqlWarehouseInput"></a>

```python
sql_warehouse_input: IResolvable | DataDatabricksAppsSpaceResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a>

---

##### `uc_securable_input`<sup>Optional</sup> <a name="uc_securable_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.ucSecurableInput"></a>

```python
uc_securable_input: IResolvable | DataDatabricksAppsSpaceResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsSpaceResources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResources">DataDatabricksAppsSpaceResources</a>

---


### DataDatabricksAppsSpaceResourcesSecretOutputReference <a name="DataDatabricksAppsSpaceResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSecret">DataDatabricksAppsSpaceResourcesSecret</a>

---


### DataDatabricksAppsSpaceResourcesServingEndpointOutputReference <a name="DataDatabricksAppsSpaceResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesServingEndpoint">DataDatabricksAppsSpaceResourcesServingEndpoint</a>

---


### DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesSqlWarehouse">DataDatabricksAppsSpaceResourcesSqlWarehouse</a>

---


### DataDatabricksAppsSpaceResourcesUcSecurableOutputReference <a name="DataDatabricksAppsSpaceResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableKind">securable_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput">securable_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableFullName">securable_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `securable_kind`<sup>Required</sup> <a name="securable_kind" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `securable_full_name_input`<sup>Optional</sup> <a name="securable_full_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```python
securable_full_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpaceResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceResourcesUcSecurable">DataDatabricksAppsSpaceResourcesUcSecurable</a>

---


### DataDatabricksAppsSpaceStatusOutputReference <a name="DataDatabricksAppsSpaceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_space

dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatus">DataDatabricksAppsSpaceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsSpaceStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpace.DataDatabricksAppsSpaceStatus">DataDatabricksAppsSpaceStatus</a>

---



