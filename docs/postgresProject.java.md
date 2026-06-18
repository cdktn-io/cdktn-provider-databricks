# `postgresProject` Submodule <a name="`postgresProject` Submodule" id="@cdktn/provider-databricks.postgresProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresProject <a name="PostgresProject" id="@cdktn/provider-databricks.postgresProject.PostgresProject"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project databricks_postgres_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProject;

PostgresProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
//  .initialEndpointSpec(PostgresProjectInitialEndpointSpec)
//  .providerConfig(PostgresProjectProviderConfig)
//  .purgeOnDelete(java.lang.Boolean|IResolvable)
//  .spec(PostgresProjectSpec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#project_id PostgresProject#project_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#initial_endpoint_spec PostgresProject#initial_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#provider_config PostgresProject#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#purge_on_delete PostgresProject#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#spec PostgresProject#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#project_id PostgresProject#project_id}.

---

##### `initialEndpointSpec`<sup>Optional</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.initialEndpointSpec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#initial_endpoint_spec PostgresProject#initial_endpoint_spec}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#provider_config PostgresProject#provider_config}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.purgeOnDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#purge_on_delete PostgresProject#purge_on_delete}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#spec PostgresProject#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.putInitialEndpointSpec">putInitialEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.resetInitialEndpointSpec">resetInitialEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.resetPurgeOnDelete">resetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresProject.PostgresProject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresProject.PostgresProject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresProject.PostgresProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresProject.PostgresProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresProject.PostgresProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresProject.PostgresProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresProject.PostgresProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresProject.PostgresProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresProject.PostgresProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresProject.PostgresProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresProject.PostgresProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresProject.PostgresProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresProject.PostgresProject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresProject.PostgresProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialEndpointSpec` <a name="putInitialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putInitialEndpointSpec"></a>

```java
public void putInitialEndpointSpec(PostgresProjectInitialEndpointSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putInitialEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresProjectProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putSpec"></a>

```java
public void putSpec(PostgresProjectSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProject.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a>

---

##### `resetInitialEndpointSpec` <a name="resetInitialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.resetInitialEndpointSpec"></a>

```java
public void resetInitialEndpointSpec()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProject.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetPurgeOnDelete` <a name="resetPurgeOnDelete" id="@cdktn/provider-databricks.postgresProject.PostgresProject.resetPurgeOnDelete"></a>

```java
public void resetPurgeOnDelete()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isConstruct"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProject;

PostgresProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProject;

PostgresProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProject;

PostgresProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresProject.PostgresProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProject;

PostgresProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresProject.PostgresProject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference">PostgresProjectInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference">PostgresProjectProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeTime">purgeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference">PostgresProjectSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference">PostgresProjectStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.initialEndpointSpecInput">initialEndpointSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeOnDeleteInput">purgeOnDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `initialEndpointSpec`<sup>Required</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.initialEndpointSpec"></a>

```java
public PostgresProjectInitialEndpointSpecOutputReference getInitialEndpointSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference">PostgresProjectInitialEndpointSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.providerConfig"></a>

```java
public PostgresProjectProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference">PostgresProjectProviderConfigOutputReference</a>

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeTime"></a>

```java
public java.lang.String getPurgeTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.spec"></a>

```java
public PostgresProjectSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference">PostgresProjectSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.status"></a>

```java
public PostgresProjectStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference">PostgresProjectStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `initialEndpointSpecInput`<sup>Optional</sup> <a name="initialEndpointSpecInput" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.initialEndpointSpecInput"></a>

```java
public IResolvable|PostgresProjectInitialEndpointSpec getInitialEndpointSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.providerConfigInput"></a>

```java
public IResolvable|PostgresProjectProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a>

---

##### `purgeOnDeleteInput`<sup>Optional</sup> <a name="purgeOnDeleteInput" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.specInput"></a>

```java
public IResolvable|PostgresProjectSpec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `purgeOnDelete`<sup>Required</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.purgeOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresProject.PostgresProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresProjectConfig <a name="PostgresProjectConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectConfig;

PostgresProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .projectId(java.lang.String)
//  .initialEndpointSpec(PostgresProjectInitialEndpointSpec)
//  .providerConfig(PostgresProjectProviderConfig)
//  .purgeOnDelete(java.lang.Boolean|IResolvable)
//  .spec(PostgresProjectSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#project_id PostgresProject#project_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#initial_endpoint_spec PostgresProject#initial_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#provider_config PostgresProject#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#purge_on_delete PostgresProject#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#spec PostgresProject#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#project_id PostgresProject#project_id}.

---

##### `initialEndpointSpec`<sup>Optional</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.initialEndpointSpec"></a>

```java
public PostgresProjectInitialEndpointSpec getInitialEndpointSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#initial_endpoint_spec PostgresProject#initial_endpoint_spec}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.providerConfig"></a>

```java
public PostgresProjectProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#provider_config PostgresProject#provider_config}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.purgeOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#purge_on_delete PostgresProject#purge_on_delete}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresProject.PostgresProjectConfig.property.spec"></a>

```java
public PostgresProjectSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#spec PostgresProject#spec}.

---

### PostgresProjectInitialEndpointSpec <a name="PostgresProjectInitialEndpointSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectInitialEndpointSpec;

PostgresProjectInitialEndpointSpec.builder()
//  .group(PostgresProjectInitialEndpointSpecGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#group PostgresProject#group}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec.property.group"></a>

```java
public PostgresProjectInitialEndpointSpecGroup getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#group PostgresProject#group}.

---

### PostgresProjectInitialEndpointSpecGroup <a name="PostgresProjectInitialEndpointSpecGroup" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectInitialEndpointSpecGroup;

PostgresProjectInitialEndpointSpecGroup.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
//  .enableReadableSecondaries(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#max PostgresProject#max}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#min PostgresProject#min}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#enable_readable_secondaries PostgresProject#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#max PostgresProject#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#min PostgresProject#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#enable_readable_secondaries PostgresProject#enable_readable_secondaries}.

---

### PostgresProjectProviderConfig <a name="PostgresProjectProviderConfig" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectProviderConfig;

PostgresProjectProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#workspace_id PostgresProject#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#workspace_id PostgresProject#workspace_id}.

---

### PostgresProjectSpec <a name="PostgresProjectSpec" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpec;

PostgresProjectSpec.builder()
//  .budgetPolicyId(java.lang.String)
//  .customTags(IResolvable|java.util.List<PostgresProjectSpecCustomTags>)
//  .defaultBranch(java.lang.String)
//  .defaultEndpointSettings(PostgresProjectSpecDefaultEndpointSettings)
//  .displayName(java.lang.String)
//  .enablePgNativeLogin(java.lang.Boolean|IResolvable)
//  .historyRetentionDuration(java.lang.String)
//  .pgVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#budget_policy_id PostgresProject#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.customTags">customTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#custom_tags PostgresProject#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#default_branch PostgresProject#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#default_endpoint_settings PostgresProject#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#display_name PostgresProject#display_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#enable_pg_native_login PostgresProject#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#history_retention_duration PostgresProject#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_version PostgresProject#pg_version}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#budget_policy_id PostgresProject#budget_policy_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.customTags"></a>

```java
public IResolvable|java.util.List<PostgresProjectSpecCustomTags> getCustomTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#custom_tags PostgresProject#custom_tags}.

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#default_branch PostgresProject#default_branch}.

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.defaultEndpointSettings"></a>

```java
public PostgresProjectSpecDefaultEndpointSettings getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#default_endpoint_settings PostgresProject#default_endpoint_settings}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#display_name PostgresProject#display_name}.

---

##### `enablePgNativeLogin`<sup>Optional</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.enablePgNativeLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#enable_pg_native_login PostgresProject#enable_pg_native_login}.

---

##### `historyRetentionDuration`<sup>Optional</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#history_retention_duration PostgresProject#history_retention_duration}.

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpec.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_version PostgresProject#pg_version}.

---

### PostgresProjectSpecCustomTags <a name="PostgresProjectSpecCustomTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecCustomTags;

PostgresProjectSpecCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#key PostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#value PostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#key PostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#value PostgresProject#value}.

---

### PostgresProjectSpecDefaultEndpointSettings <a name="PostgresProjectSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecDefaultEndpointSettings;

PostgresProjectSpecDefaultEndpointSettings.builder()
//  .autoscalingLimitMaxCu(java.lang.Number)
//  .autoscalingLimitMinCu(java.lang.Number)
//  .noSuspension(java.lang.Boolean|IResolvable)
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTimeoutDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_max_cu PostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_min_cu PostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#no_suspension PostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_settings PostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#suspend_timeout_duration PostgresProject#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_max_cu PostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_min_cu PostgresProject#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#no_suspension PostgresProject#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_settings PostgresProject#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#suspend_timeout_duration PostgresProject#suspend_timeout_duration}.

---

### PostgresProjectStatus <a name="PostgresProjectStatus" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatus;

PostgresProjectStatus.builder()
    .build();
```


### PostgresProjectStatusCustomTags <a name="PostgresProjectStatusCustomTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusCustomTags;

PostgresProjectStatusCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#key PostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#value PostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#key PostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#value PostgresProject#value}.

---

### PostgresProjectStatusDefaultEndpointSettings <a name="PostgresProjectStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusDefaultEndpointSettings;

PostgresProjectStatusDefaultEndpointSettings.builder()
//  .autoscalingLimitMaxCu(java.lang.Number)
//  .autoscalingLimitMinCu(java.lang.Number)
//  .noSuspension(java.lang.Boolean|IResolvable)
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTimeoutDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_max_cu PostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_min_cu PostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#no_suspension PostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_settings PostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#suspend_timeout_duration PostgresProject#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_max_cu PostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#autoscaling_limit_min_cu PostgresProject#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#no_suspension PostgresProject#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#pg_settings PostgresProject#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/postgres_project#suspend_timeout_duration PostgresProject#suspend_timeout_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresProjectInitialEndpointSpecGroupOutputReference <a name="PostgresProjectInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectInitialEndpointSpecGroupOutputReference;

new PostgresProjectInitialEndpointSpecGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```java
public void resetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondariesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectInitialEndpointSpecGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a>

---


### PostgresProjectInitialEndpointSpecOutputReference <a name="PostgresProjectInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectInitialEndpointSpecOutputReference;

new PostgresProjectInitialEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.putGroup"></a>

```java
public void putGroup(PostgresProjectInitialEndpointSpecGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.resetGroup"></a>

```java
public void resetGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference">PostgresProjectInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.groupInput">groupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.group"></a>

```java
public PostgresProjectInitialEndpointSpecGroupOutputReference getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroupOutputReference">PostgresProjectInitialEndpointSpecGroupOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.groupInput"></a>

```java
public IResolvable|PostgresProjectInitialEndpointSpecGroup getGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecGroup">PostgresProjectInitialEndpointSpecGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectInitialEndpointSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectInitialEndpointSpec">PostgresProjectInitialEndpointSpec</a>

---


### PostgresProjectProviderConfigOutputReference <a name="PostgresProjectProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectProviderConfigOutputReference;

new PostgresProjectProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectProviderConfig">PostgresProjectProviderConfig</a>

---


### PostgresProjectSpecCustomTagsList <a name="PostgresProjectSpecCustomTagsList" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecCustomTagsList;

new PostgresProjectSpecCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.get"></a>

```java
public PostgresProjectSpecCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PostgresProjectSpecCustomTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>>

---


### PostgresProjectSpecCustomTagsOutputReference <a name="PostgresProjectSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecCustomTagsOutputReference;

new PostgresProjectSpecCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectSpecCustomTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>

---


### PostgresProjectSpecDefaultEndpointSettingsOutputReference <a name="PostgresProjectSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecDefaultEndpointSettingsOutputReference;

new PostgresProjectSpecDefaultEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```java
public void resetAutoscalingLimitMaxCu()
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```java
public void resetAutoscalingLimitMinCu()
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```java
public void resetNoSuspension()
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```java
public void resetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCuInput();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMinCuInput();
```

- *Type:* java.lang.Number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```java
public java.lang.String getSuspendTimeoutDurationInput();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectSpecDefaultEndpointSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a>

---


### PostgresProjectSpecOutputReference <a name="PostgresProjectSpecOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectSpecOutputReference;

new PostgresProjectSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetEnablePgNativeLogin">resetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetHistoryRetentionDuration">resetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetPgVersion">resetPgVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putCustomTags"></a>

```java
public void putCustomTags(IResolvable|java.util.List<PostgresProjectSpecCustomTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>>

---

##### `putDefaultEndpointSettings` <a name="putDefaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putDefaultEndpointSettings"></a>

```java
public void putDefaultEndpointSettings(PostgresProjectSpecDefaultEndpointSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetDefaultEndpointSettings` <a name="resetDefaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDefaultEndpointSettings"></a>

```java
public void resetDefaultEndpointSettings()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablePgNativeLogin` <a name="resetEnablePgNativeLogin" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetEnablePgNativeLogin"></a>

```java
public void resetEnablePgNativeLogin()
```

##### `resetHistoryRetentionDuration` <a name="resetHistoryRetentionDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetHistoryRetentionDuration"></a>

```java
public void resetHistoryRetentionDuration()
```

##### `resetPgVersion` <a name="resetPgVersion" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.resetPgVersion"></a>

```java
public void resetPgVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList">PostgresProjectSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference">PostgresProjectSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.enablePgNativeLoginInput">enablePgNativeLoginInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.historyRetentionDurationInput">historyRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.pgVersionInput">pgVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.customTags"></a>

```java
public PostgresProjectSpecCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTagsList">PostgresProjectSpecCustomTagsList</a>

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultEndpointSettings"></a>

```java
public PostgresProjectSpecDefaultEndpointSettingsOutputReference getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettingsOutputReference">PostgresProjectSpecDefaultEndpointSettingsOutputReference</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.customTagsInput"></a>

```java
public IResolvable|java.util.List<PostgresProjectSpecCustomTags> getCustomTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecCustomTags">PostgresProjectSpecCustomTags</a>>

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `defaultEndpointSettingsInput`<sup>Optional</sup> <a name="defaultEndpointSettingsInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```java
public IResolvable|PostgresProjectSpecDefaultEndpointSettings getDefaultEndpointSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpecDefaultEndpointSettings">PostgresProjectSpecDefaultEndpointSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLoginInput`<sup>Optional</sup> <a name="enablePgNativeLoginInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.enablePgNativeLoginInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLoginInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDurationInput`<sup>Optional</sup> <a name="historyRetentionDurationInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.historyRetentionDurationInput"></a>

```java
public java.lang.String getHistoryRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `pgVersionInput`<sup>Optional</sup> <a name="pgVersionInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.pgVersionInput"></a>

```java
public java.lang.Number getPgVersionInput();
```

- *Type:* java.lang.Number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.enablePgNativeLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresProjectSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectSpec">PostgresProjectSpec</a>

---


### PostgresProjectStatusCustomTagsList <a name="PostgresProjectStatusCustomTagsList" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusCustomTagsList;

new PostgresProjectStatusCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.get"></a>

```java
public PostgresProjectStatusCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags">PostgresProjectStatusCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PostgresProjectStatusCustomTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags">PostgresProjectStatusCustomTags</a>>

---


### PostgresProjectStatusCustomTagsOutputReference <a name="PostgresProjectStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusCustomTagsOutputReference;

new PostgresProjectStatusCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags">PostgresProjectStatusCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsOutputReference.property.internalValue"></a>

```java
public PostgresProjectStatusCustomTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTags">PostgresProjectStatusCustomTags</a>

---


### PostgresProjectStatusDefaultEndpointSettingsOutputReference <a name="PostgresProjectStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusDefaultEndpointSettingsOutputReference;

new PostgresProjectStatusDefaultEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```java
public void resetAutoscalingLimitMaxCu()
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```java
public void resetAutoscalingLimitMinCu()
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```java
public void resetNoSuspension()
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```java
public void resetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings">PostgresProjectStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCuInput();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMinCuInput();
```

- *Type:* java.lang.Number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```java
public java.lang.String getSuspendTimeoutDurationInput();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```java
public PostgresProjectStatusDefaultEndpointSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettings">PostgresProjectStatusDefaultEndpointSettings</a>

---


### PostgresProjectStatusOutputReference <a name="PostgresProjectStatusOutputReference" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_project.PostgresProjectStatusOutputReference;

new PostgresProjectStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes">branchLogicalSizeLimitBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList">PostgresProjectStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference">PostgresProjectStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes">syntheticStorageSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatus">PostgresProjectStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchLogicalSizeLimitBytes`<sup>Required</sup> <a name="branchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```java
public java.lang.Number getBranchLogicalSizeLimitBytes();
```

- *Type:* java.lang.Number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.customTags"></a>

```java
public PostgresProjectStatusCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusCustomTagsList">PostgresProjectStatusCustomTagsList</a>

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.defaultEndpointSettings"></a>

```java
public PostgresProjectStatusDefaultEndpointSettingsOutputReference getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatusDefaultEndpointSettingsOutputReference">PostgresProjectStatusDefaultEndpointSettingsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.enablePgNativeLogin"></a>

```java
public IResolvable getEnablePgNativeLogin();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `syntheticStorageSizeBytes`<sup>Required</sup> <a name="syntheticStorageSizeBytes" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```java
public java.lang.Number getSyntheticStorageSizeBytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresProject.PostgresProjectStatusOutputReference.property.internalValue"></a>

```java
public PostgresProjectStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresProject.PostgresProjectStatus">PostgresProjectStatus</a>

---



