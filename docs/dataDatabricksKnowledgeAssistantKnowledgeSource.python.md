# `dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSource <a name="DataDatabricksKnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource(
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
  provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable">file_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">knowledge_cutoff_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.files"></a>

```python
files: DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `file_table`<sup>Required</sup> <a name="file_table" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```python
file_table: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.index"></a>

```python
index: DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `knowledge_cutoff_time`<sup>Required</sup> <a name="knowledge_cutoff_time" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```python
knowledge_cutoff_time: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable(
  file_col: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">file_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex(
  doc_uri_col: str,
  index_name: str,
  text_col: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol">text_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}.

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFiles">DataDatabricksKnowledgeAssistantKnowledgeSourceFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">file_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">file_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_col_input`<sup>Optional</sup> <a name="file_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```python
file_col_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">doc_uri_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">text_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">text_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_uri_col_input`<sup>Optional</sup> <a name="doc_uri_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```python
doc_uri_col_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `text_col_input`<sup>Optional</sup> <a name="text_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```python
text_col_input: str
```

- *Type:* str

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceIndex">DataDatabricksKnowledgeAssistantKnowledgeSourceIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_source

dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSource.DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig</a>

---



