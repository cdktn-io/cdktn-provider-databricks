# `dataDatabricksKnowledgeAssistants` Submodule <a name="`dataDatabricksKnowledgeAssistants` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants databricks_knowledge_assistants}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants(
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
  provider_config: DataDatabricksKnowledgeAssistantsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksKnowledgeAssistants to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksKnowledgeAssistants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants">knowledge_assistants</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `knowledge_assistants`<sup>Required</sup> <a name="knowledge_assistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants"></a>

```python
knowledge_assistants: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksKnowledgeAssistantsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantsConfig <a name="DataDatabricksKnowledgeAssistantsConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksKnowledgeAssistantsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants(
  name: str,
  provider_config: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

### DataDatabricksKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksKnowledgeAssistantsKnowledgeAssistants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>]

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo">error_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo"></a>

```python
error_info: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantsKnowledgeAssistants
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---


### DataDatabricksKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistants

dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksKnowledgeAssistantsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---



