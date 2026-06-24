# `mlflowExperiment` Submodule <a name="`mlflowExperiment` Submodule" id="@cdktn/provider-databricks.mlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowExperiment <a name="MlflowExperiment" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .artifactLocation(java.lang.String)
//  .creationTime(java.lang.Number)
//  .description(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .lastUpdateTime(java.lang.Number)
//  .lifecycleStage(java.lang.String)
//  .providerConfig(MlflowExperimentProviderConfig)
//  .tags(IResolvable|java.util.List<MlflowExperimentTags>)
//  .timeouts(MlflowExperimentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>></code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifactLocation`<sup>Optional</sup> <a name="artifactLocation" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="lastUpdateTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#provider_config MlflowExperiment#provider_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#tags MlflowExperiment#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation">resetArtifactLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId">resetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime">resetLastUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage">resetLifecycleStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putProviderConfig"></a>

```java
public void putProviderConfig(MlflowExperimentProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MlflowExperimentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts"></a>

```java
public void putTimeouts(MlflowExperimentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---

##### `resetArtifactLocation` <a name="resetArtifactLocation" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation"></a>

```java
public void resetArtifactLocation()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExperimentId` <a name="resetExperimentId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId"></a>

```java
public void resetExperimentId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetId"></a>

```java
public void resetId()
```

##### `resetLastUpdateTime` <a name="resetLastUpdateTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime"></a>

```java
public void resetLastUpdateTime()
```

##### `resetLifecycleStage` <a name="resetLifecycleStage" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage"></a>

```java
public void resetLifecycleStage()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MlflowExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MlflowExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MlflowExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MlflowExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference">MlflowExperimentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList">MlflowExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput">artifactLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput">experimentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput">lastUpdateTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput">lifecycleStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.providerConfig"></a>

```java
public MlflowExperimentProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference">MlflowExperimentProviderConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tags"></a>

```java
public MlflowExperimentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList">MlflowExperimentTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts"></a>

```java
public MlflowExperimentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a>

---

##### `artifactLocationInput`<sup>Optional</sup> <a name="artifactLocationInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput"></a>

```java
public java.lang.String getArtifactLocationInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput"></a>

```java
public java.lang.String getExperimentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastUpdateTimeInput`<sup>Optional</sup> <a name="lastUpdateTimeInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput"></a>

```java
public java.lang.Number getLastUpdateTimeInput();
```

- *Type:* java.lang.Number

---

##### `lifecycleStageInput`<sup>Optional</sup> <a name="lifecycleStageInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput"></a>

```java
public java.lang.String getLifecycleStageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.providerConfigInput"></a>

```java
public MlflowExperimentProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MlflowExperimentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput"></a>

```java
public IResolvable|MlflowExperimentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---

##### `artifactLocation`<sup>Required</sup> <a name="artifactLocation" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation"></a>

```java
public java.lang.String getArtifactLocation();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime"></a>

```java
public java.lang.Number getLastUpdateTime();
```

- *Type:* java.lang.Number

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowExperimentConfig <a name="MlflowExperimentConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentConfig;

MlflowExperimentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .artifactLocation(java.lang.String)
//  .creationTime(java.lang.Number)
//  .description(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .lastUpdateTime(java.lang.Number)
//  .lifecycleStage(java.lang.String)
//  .providerConfig(MlflowExperimentProviderConfig)
//  .tags(IResolvable|java.util.List<MlflowExperimentTags>)
//  .timeouts(MlflowExperimentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>></code> | tags block. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifactLocation`<sup>Optional</sup> <a name="artifactLocation" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation"></a>

```java
public java.lang.String getArtifactLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="lastUpdateTime" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime"></a>

```java
public java.lang.Number getLastUpdateTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.providerConfig"></a>

```java
public MlflowExperimentProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#provider_config MlflowExperiment#provider_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MlflowExperimentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#tags MlflowExperiment#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts"></a>

```java
public MlflowExperimentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

### MlflowExperimentProviderConfig <a name="MlflowExperimentProviderConfig" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentProviderConfig;

MlflowExperimentProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#workspace_id MlflowExperiment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#workspace_id MlflowExperiment#workspace_id}.

---

### MlflowExperimentTags <a name="MlflowExperimentTags" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentTags;

MlflowExperimentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#key MlflowExperiment#key}. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#value MlflowExperiment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#key MlflowExperiment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/mlflow_experiment#value MlflowExperiment#value}.

---

### MlflowExperimentTimeouts <a name="MlflowExperimentTimeouts" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentTimeouts;

MlflowExperimentTimeouts.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### MlflowExperimentProviderConfigOutputReference <a name="MlflowExperimentProviderConfigOutputReference" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentProviderConfigOutputReference;

new MlflowExperimentProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfigOutputReference.property.internalValue"></a>

```java
public MlflowExperimentProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentProviderConfig">MlflowExperimentProviderConfig</a>

---


### MlflowExperimentTagsList <a name="MlflowExperimentTagsList" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentTagsList;

new MlflowExperimentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.get"></a>

```java
public MlflowExperimentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MlflowExperimentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>>

---


### MlflowExperimentTagsOutputReference <a name="MlflowExperimentTagsOutputReference" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentTagsOutputReference;

new MlflowExperimentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MlflowExperimentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTags">MlflowExperimentTags</a>

---


### MlflowExperimentTimeoutsOutputReference <a name="MlflowExperimentTimeoutsOutputReference" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mlflow_experiment.MlflowExperimentTimeoutsOutputReference;

new MlflowExperimentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MlflowExperimentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---



