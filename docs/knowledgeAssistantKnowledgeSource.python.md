# `knowledgeAssistantKnowledgeSource` Submodule <a name="`knowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KnowledgeAssistantKnowledgeSource <a name="KnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  display_name: str,
  parent: str,
  source_type: str,
  files: KnowledgeAssistantKnowledgeSourceFiles = None,
  file_table: KnowledgeAssistantKnowledgeSourceFileTable = None,
  index: KnowledgeAssistantKnowledgeSourceIndex = None,
  provider_config: KnowledgeAssistantKnowledgeSourceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.fileTable">file_table</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}.

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.files"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}.

---

##### `file_table`<sup>Optional</sup> <a name="file_table" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.fileTable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.index"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable">put_file_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex">put_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles">reset_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable">reset_file_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex">reset_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_files` <a name="put_files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles"></a>

```python
def put_files(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}.

---

##### `put_file_table` <a name="put_file_table" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable"></a>

```python
def put_file_table(
  file_col: str,
  table_name: str
) -> None
```

###### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable.parameter.fileCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}.

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}.

---

##### `put_index` <a name="put_index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex"></a>

```python
def put_index(
  doc_uri_col: str,
  index_name: str,
  text_col: str
) -> None
```

###### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex.parameter.docUriCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

###### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex.parameter.indexName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}.

---

###### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex.parameter.textCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}.

---

##### `reset_files` <a name="reset_files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles"></a>

```python
def reset_files() -> None
```

##### `reset_file_table` <a name="reset_file_table" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable"></a>

```python
def reset_file_table() -> None
```

##### `reset_index` <a name="reset_index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex"></a>

```python
def reset_index() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KnowledgeAssistantKnowledgeSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable">file_table</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">knowledge_cutoff_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput">files_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput">file_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput">index_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files"></a>

```python
files: KnowledgeAssistantKnowledgeSourceFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `file_table`<sup>Required</sup> <a name="file_table" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```python
file_table: KnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index"></a>

```python
index: KnowledgeAssistantKnowledgeSourceIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `knowledge_cutoff_time`<sup>Required</sup> <a name="knowledge_cutoff_time" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```python
knowledge_cutoff_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```python
provider_config: KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput"></a>

```python
files_input: IResolvable | KnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---

##### `file_table_input`<sup>Optional</sup> <a name="file_table_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput"></a>

```python
file_table_input: IResolvable | KnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput"></a>

```python
index_input: IResolvable | KnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | KnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KnowledgeAssistantKnowledgeSourceConfig <a name="KnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  display_name: str,
  parent: str,
  source_type: str,
  files: KnowledgeAssistantKnowledgeSourceFiles = None,
  file_table: KnowledgeAssistantKnowledgeSourceFileTable = None,
  index: KnowledgeAssistantKnowledgeSourceIndex = None,
  provider_config: KnowledgeAssistantKnowledgeSourceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files">files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable">file_table</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index">index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}.

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files"></a>

```python
files: KnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}.

---

##### `file_table`<sup>Optional</sup> <a name="file_table" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable"></a>

```python
file_table: KnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index"></a>

```python
index: KnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```python
provider_config: KnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}.

---

### KnowledgeAssistantKnowledgeSourceFiles <a name="KnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}.

---

### KnowledgeAssistantKnowledgeSourceFileTable <a name="KnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable(
  file_col: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">file_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}.

---

### KnowledgeAssistantKnowledgeSourceIndex <a name="KnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex(
  doc_uri_col: str,
  index_name: str,
  text_col: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol">text_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}.

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}.

---

### KnowledgeAssistantKnowledgeSourceProviderConfig <a name="KnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="KnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---


### KnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="KnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">file_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">file_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_col_input`<sup>Optional</sup> <a name="file_col_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```python
file_col_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `file_col`<sup>Required</sup> <a name="file_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```python
file_col: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---


### KnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="KnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">doc_uri_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">text_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">doc_uri_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">text_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_uri_col_input`<sup>Optional</sup> <a name="doc_uri_col_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```python
doc_uri_col_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `text_col_input`<sup>Optional</sup> <a name="text_col_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```python
text_col_input: str
```

- *Type:* str

---

##### `doc_uri_col`<sup>Required</sup> <a name="doc_uri_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```python
doc_uri_col: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `text_col`<sup>Required</sup> <a name="text_col" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```python
text_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---


### KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import knowledge_assistant_knowledge_source

knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---



