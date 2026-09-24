# `postgresSnapshotSchedule` Submodule <a name="`postgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.postgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSnapshotSchedule <a name="PostgresSnapshotSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotSchedule;

PostgresSnapshotSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .providerConfig(PostgresSnapshotScheduleProviderConfig)
//  .schedule(IResolvable|java.util.List<PostgresSnapshotScheduleSchedule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.schedule">schedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.schedule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresSnapshotScheduleProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule"></a>

```java
public void putSchedule(IResolvable|java.util.List<PostgresSnapshotScheduleSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule"></a>

```java
public void resetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotSchedule;

PostgresSnapshotSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotSchedule;

PostgresSnapshotSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotSchedule;

PostgresSnapshotSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotSchedule;

PostgresSnapshotSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresSnapshotSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresSnapshotSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig"></a>

```java
public PostgresSnapshotScheduleProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule"></a>

```java
public PostgresSnapshotScheduleScheduleList getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput"></a>

```java
public IResolvable|PostgresSnapshotScheduleProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput"></a>

```java
public IResolvable|java.util.List<PostgresSnapshotScheduleSchedule> getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSnapshotScheduleConfig <a name="PostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleConfig;

PostgresSnapshotScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .providerConfig(PostgresSnapshotScheduleProviderConfig)
//  .schedule(IResolvable|java.util.List<PostgresSnapshotScheduleSchedule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule">schedule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig"></a>

```java
public PostgresSnapshotScheduleProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule"></a>

```java
public IResolvable|java.util.List<PostgresSnapshotScheduleSchedule> getSchedule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

### PostgresSnapshotScheduleProviderConfig <a name="PostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleProviderConfig;

PostgresSnapshotScheduleProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}.

---

### PostgresSnapshotScheduleSchedule <a name="PostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleSchedule;

PostgresSnapshotScheduleSchedule.builder()
    .retention(java.lang.String)
//  .dailySchedule(PostgresSnapshotScheduleScheduleDailySchedule)
//  .monthlySchedule(PostgresSnapshotScheduleScheduleMonthlySchedule)
//  .weeklySchedule(PostgresSnapshotScheduleScheduleWeeklySchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention">retention</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}. |

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}.

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleDailySchedule getDailySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleMonthlySchedule getMonthlySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleWeeklySchedule getWeeklySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}.

---

### PostgresSnapshotScheduleScheduleDailySchedule <a name="PostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleDailySchedule;

PostgresSnapshotScheduleScheduleDailySchedule.builder()
//  .hour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleMonthlySchedule <a name="PostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleMonthlySchedule;

PostgresSnapshotScheduleScheduleMonthlySchedule.builder()
    .day(java.lang.Number)
//  .hour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day">day</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleWeeklySchedule <a name="PostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleWeeklySchedule;

PostgresSnapshotScheduleScheduleWeeklySchedule.builder()
    .dayOfWeek(java.lang.String)
//  .hour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresSnapshotScheduleProviderConfigOutputReference <a name="PostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleProviderConfigOutputReference;

new PostgresSnapshotScheduleProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSnapshotScheduleProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---


### PostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference;

new PostgresSnapshotScheduleScheduleDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleDailySchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---


### PostgresSnapshotScheduleScheduleList <a name="PostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleList;

new PostgresSnapshotScheduleScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get"></a>

```java
public PostgresSnapshotScheduleScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PostgresSnapshotScheduleSchedule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>>

---


### PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference;

new PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleMonthlySchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---


### PostgresSnapshotScheduleScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleOutputReference;

new PostgresSnapshotScheduleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```java
public void putDailySchedule(PostgresSnapshotScheduleScheduleDailySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```java
public void putMonthlySchedule(PostgresSnapshotScheduleScheduleMonthlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```java
public void putWeeklySchedule(PostgresSnapshotScheduleScheduleWeeklySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```java
public void resetDailySchedule()
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```java
public void resetMonthlySchedule()
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```java
public void resetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">retentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention">retention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleDailyScheduleOutputReference getDailySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference getMonthlySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```java
public PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference getWeeklySchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleDailySchedule getDailyScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleMonthlySchedule getMonthlyScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```java
public java.lang.String getRetentionInput();
```

- *Type:* java.lang.String

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleWeeklySchedule getWeeklyScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSnapshotScheduleSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>

---


### PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_snapshot_schedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference;

new PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```java
public void resetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSnapshotScheduleScheduleWeeklySchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---



