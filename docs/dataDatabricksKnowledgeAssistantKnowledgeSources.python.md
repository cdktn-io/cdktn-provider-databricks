# `dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule <a name="`dataDatabricksKnowledgeAssistantKnowledgeSources` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources databricks_knowledge_assistant_knowledge_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources(
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
  provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistantKnowledgeSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources">knowledge_sources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `knowledge_sources`<sup>Required</sup> <a name="knowledge_sources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.knowledgeSources"></a>

```python
knowledge_sources: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#parent DataDatabricksKnowledgeAssistantKnowledgeSources#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#page_size DataDatabricksKnowledgeAssistantKnowledgeSources#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources(
  name: str,
  provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#name DataDatabricksKnowledgeAssistantKnowledgeSources#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#provider_config DataDatabricksKnowledgeAssistantKnowledgeSources#provider_config}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#path DataDatabricksKnowledgeAssistantKnowledgeSources#path}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable(
  file_col: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol">file_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}. |

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#file_col DataDatabricksKnowledgeAssistantKnowledgeSources#file_col}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#table_name DataDatabricksKnowledgeAssistantKnowledgeSources#table_name}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex(
  doc_uri_col: str,
  index_name: str,
  text_col: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol">text_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}. |

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSources#doc_uri_col}.

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#index_name DataDatabricksKnowledgeAssistantKnowledgeSources#index_name}.

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#text_col DataDatabricksKnowledgeAssistantKnowledgeSources#text_col}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFiles</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput">file_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol">file_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_col_input`<sup>Optional</sup> <a name="file_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileColInput"></a>

```python
file_col_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTable</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput">doc_uri_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput">text_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol">text_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_uri_col_input`<sup>Optional</sup> <a name="doc_uri_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriColInput"></a>

```python
doc_uri_col_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `text_col_input`<sup>Optional</sup> <a name="text_col_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textColInput"></a>

```python
text_col_input: str
```

- *Type:* str

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndex</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>]

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/knowledge_assistant_knowledge_sources#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSources#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable">file_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime">knowledge_cutoff_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.files"></a>

```python
files: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFilesOutputReference</a>

---

##### `file_table`<sup>Required</sup> <a name="file_table" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.fileTable"></a>

```python
file_table: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesFileTableOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.index"></a>

```python
index: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesIndexOutputReference</a>

---

##### `knowledge_cutoff_time`<sup>Required</sup> <a name="knowledge_cutoff_time" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.knowledgeCutoffTime"></a>

```python
knowledge_cutoff_time: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSources</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesKnowledgeSourcesProviderConfig</a>

---


### DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_knowledge_assistant_knowledge_sources

dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistantKnowledgeSources.DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig">DataDatabricksKnowledgeAssistantKnowledgeSourcesProviderConfig</a>

---



