# `dataDatabricksMlflowExperiment` Submodule <a name="`dataDatabricksMlflowExperiment` Submodule" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowExperiment <a name="DataDatabricksMlflowExperiment" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  name: str = None,
  provider_config: DataDatabricksMlflowExperimentProviderConfig = None,
  tags: IResolvable | typing.List[DataDatabricksMlflowExperimentTags] = None,
  trace_location: DataDatabricksMlflowExperimentTraceLocation = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.traceLocation">trace_location</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | trace_location block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.artifactLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lastUpdateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycleStage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#provider_config DataDatabricksMlflowExperiment#provider_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

##### `trace_location`<sup>Optional</sup> <a name="trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.traceLocation"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#trace_location DataDatabricksMlflowExperiment#trace_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation">put_trace_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation">reset_artifact_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId">reset_experiment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime">reset_last_update_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage">reset_lifecycle_stage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTraceLocation">reset_trace_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DataDatabricksMlflowExperimentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

---

##### `put_trace_location` <a name="put_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation"></a>

```python
def put_trace_location(
  uc_trace_location: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation = None
) -> None
```

###### `uc_trace_location`<sup>Optional</sup> <a name="uc_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTraceLocation.parameter.ucTraceLocation"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

uc_trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#uc_trace_location DataDatabricksMlflowExperiment#uc_trace_location}

---

##### `reset_artifact_location` <a name="reset_artifact_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation"></a>

```python
def reset_artifact_location() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_experiment_id` <a name="reset_experiment_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId"></a>

```python
def reset_experiment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_update_time` <a name="reset_last_update_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime"></a>

```python
def reset_last_update_time() -> None
```

##### `reset_lifecycle_stage` <a name="reset_lifecycle_stage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage"></a>

```python
def reset_lifecycle_stage() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trace_location` <a name="reset_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTraceLocation"></a>

```python
def reset_trace_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksMlflowExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksMlflowExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMlflowExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference">DataDatabricksMlflowExperimentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocation">trace_location</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput">artifact_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput">last_update_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput">lifecycle_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocationInput">trace_location_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation">artifact_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfig"></a>

```python
provider_config: DataDatabricksMlflowExperimentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference">DataDatabricksMlflowExperimentProviderConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags"></a>

```python
tags: DataDatabricksMlflowExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a>

---

##### `trace_location`<sup>Required</sup> <a name="trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocation"></a>

```python
trace_location: DataDatabricksMlflowExperimentTraceLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationOutputReference</a>

---

##### `artifact_location_input`<sup>Optional</sup> <a name="artifact_location_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput"></a>

```python
artifact_location_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_update_time_input`<sup>Optional</sup> <a name="last_update_time_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput"></a>

```python
last_update_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage_input`<sup>Optional</sup> <a name="lifecycle_stage_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput"></a>

```python
lifecycle_stage_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.providerConfigInput"></a>

```python
provider_config_input: DataDatabricksMlflowExperimentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DataDatabricksMlflowExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

---

##### `trace_location_input`<sup>Optional</sup> <a name="trace_location_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.traceLocationInput"></a>

```python
trace_location_input: DataDatabricksMlflowExperimentTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

---

##### `artifact_location`<sup>Required</sup> <a name="artifact_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowExperimentConfig <a name="DataDatabricksMlflowExperimentConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  name: str = None,
  provider_config: DataDatabricksMlflowExperimentProviderConfig = None,
  tags: IResolvable | typing.List[DataDatabricksMlflowExperimentTags] = None,
  trace_location: DataDatabricksMlflowExperimentTraceLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]</code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.traceLocation">trace_location</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | trace_location block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksMlflowExperimentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#provider_config DataDatabricksMlflowExperiment#provider_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DataDatabricksMlflowExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

##### `trace_location`<sup>Optional</sup> <a name="trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.traceLocation"></a>

```python
trace_location: DataDatabricksMlflowExperimentTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#trace_location DataDatabricksMlflowExperiment#trace_location}

---

### DataDatabricksMlflowExperimentProviderConfig <a name="DataDatabricksMlflowExperimentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#workspace_id DataDatabricksMlflowExperiment#workspace_id}.

---

### DataDatabricksMlflowExperimentTags <a name="DataDatabricksMlflowExperimentTags" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}.

---

### DataDatabricksMlflowExperimentTraceLocation <a name="DataDatabricksMlflowExperimentTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation(
  uc_trace_location: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.property.ucTraceLocation">uc_trace_location</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | uc_trace_location block. |

---

##### `uc_trace_location`<sup>Optional</sup> <a name="uc_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation.property.ucTraceLocation"></a>

```python
uc_trace_location: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

uc_trace_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#uc_trace_location DataDatabricksMlflowExperiment#uc_trace_location}

---

### DataDatabricksMlflowExperimentTraceLocationUcTraceLocation <a name="DataDatabricksMlflowExperimentTraceLocationUcTraceLocation" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation(
  catalog: str,
  schema: str,
  effective_table_prefix: str = None,
  table_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.effectiveTablePrefix">effective_table_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.tablePrefix">table_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}.

---

##### `effective_table_prefix`<sup>Optional</sup> <a name="effective_table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.effectiveTablePrefix"></a>

```python
effective_table_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}.

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowExperimentProviderConfigOutputReference <a name="DataDatabricksMlflowExperimentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMlflowExperimentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentProviderConfig">DataDatabricksMlflowExperimentProviderConfig</a>

---


### DataDatabricksMlflowExperimentTagsList <a name="DataDatabricksMlflowExperimentTagsList" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMlflowExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksMlflowExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

---


### DataDatabricksMlflowExperimentTagsOutputReference <a name="DataDatabricksMlflowExperimentTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMlflowExperimentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>

---


### DataDatabricksMlflowExperimentTraceLocationOutputReference <a name="DataDatabricksMlflowExperimentTraceLocationOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation">put_uc_trace_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resetUcTraceLocation">reset_uc_trace_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_uc_trace_location` <a name="put_uc_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation"></a>

```python
def put_uc_trace_location(
  catalog: str,
  schema: str,
  effective_table_prefix: str = None,
  table_prefix: str = None
) -> None
```

###### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#catalog DataDatabricksMlflowExperiment#catalog}.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#schema DataDatabricksMlflowExperiment#schema}.

---

###### `effective_table_prefix`<sup>Optional</sup> <a name="effective_table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation.parameter.effectiveTablePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#effective_table_prefix DataDatabricksMlflowExperiment#effective_table_prefix}.

---

###### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.putUcTraceLocation.parameter.tablePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/mlflow_experiment#table_prefix DataDatabricksMlflowExperiment#table_prefix}.

---

##### `reset_uc_trace_location` <a name="reset_uc_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.resetUcTraceLocation"></a>

```python
def reset_uc_trace_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocation">uc_trace_location</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocationInput">uc_trace_location_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uc_trace_location`<sup>Required</sup> <a name="uc_trace_location" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocation"></a>

```python
uc_trace_location: DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference">DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference</a>

---

##### `uc_trace_location_input`<sup>Optional</sup> <a name="uc_trace_location_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.ucTraceLocationInput"></a>

```python
uc_trace_location_input: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMlflowExperimentTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocation">DataDatabricksMlflowExperimentTraceLocation</a>

---


### DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference <a name="DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetEffectiveTablePrefix">reset_effective_table_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effective_table_prefix` <a name="reset_effective_table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetEffectiveTablePrefix"></a>

```python
def reset_effective_table_prefix() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefixInput">effective_table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefix">effective_table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `effective_table_prefix_input`<sup>Optional</sup> <a name="effective_table_prefix_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefixInput"></a>

```python
effective_table_prefix_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `effective_table_prefix`<sup>Required</sup> <a name="effective_table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.effectiveTablePrefix"></a>

```python
effective_table_prefix: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMlflowExperimentTraceLocationUcTraceLocation
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTraceLocationUcTraceLocation">DataDatabricksMlflowExperimentTraceLocationUcTraceLocation</a>

---



