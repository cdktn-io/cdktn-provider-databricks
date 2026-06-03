# `postgresSyncedTable` Submodule <a name="`postgresSyncedTable` Submodule" id="@cdktn/provider-databricks.postgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSyncedTable <a name="PostgresSyncedTable" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTable;

PostgresSyncedTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .syncedTableId(java.lang.String)
//  .providerConfig(PostgresSyncedTableProviderConfig)
//  .spec(PostgresSyncedTableSpec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.syncedTableId">syncedTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.syncedTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresSyncedTableProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec"></a>

```java
public void putSpec(PostgresSyncedTableSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTable;

PostgresSyncedTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTable;

PostgresSyncedTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTable;

PostgresSyncedTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTable;

PostgresSyncedTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresSyncedTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresSyncedTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput">syncedTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId">syncedTableId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig"></a>

```java
public PostgresSyncedTableProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec"></a>

```java
public PostgresSyncedTableSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status"></a>

```java
public PostgresSyncedTableStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput"></a>

```java
public IResolvable|PostgresSyncedTableProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput"></a>

```java
public IResolvable|PostgresSyncedTableSpec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `syncedTableIdInput`<sup>Optional</sup> <a name="syncedTableIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput"></a>

```java
public java.lang.String getSyncedTableIdInput();
```

- *Type:* java.lang.String

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId"></a>

```java
public java.lang.String getSyncedTableId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSyncedTableConfig <a name="PostgresSyncedTableConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableConfig;

PostgresSyncedTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .syncedTableId(java.lang.String)
//  .providerConfig(PostgresSyncedTableProviderConfig)
//  .spec(PostgresSyncedTableSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId">syncedTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId"></a>

```java
public java.lang.String getSyncedTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig"></a>

```java
public PostgresSyncedTableProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec"></a>

```java
public PostgresSyncedTableSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

### PostgresSyncedTableProviderConfig <a name="PostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableProviderConfig;

PostgresSyncedTableProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

### PostgresSyncedTableSpec <a name="PostgresSyncedTableSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableSpec;

PostgresSyncedTableSpec.builder()
//  .branch(java.lang.String)
//  .createDatabaseObjectsIfMissing(java.lang.Boolean|IResolvable)
//  .existingPipelineId(java.lang.String)
//  .newPipelineSpec(PostgresSyncedTableSpecNewPipelineSpec)
//  .postgresDatabase(java.lang.String)
//  .primaryKeyColumns(java.util.List<java.lang.String>)
//  .schedulingPolicy(java.lang.String)
//  .sourceTableFullName(java.lang.String)
//  .timeseriesKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId">existingPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

##### `createDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existingPipelineId`<sup>Optional</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId"></a>

```java
public java.lang.String getExistingPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

##### `newPipelineSpec`<sup>Optional</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec"></a>

```java
public PostgresSyncedTableSpecNewPipelineSpec getNewPipelineSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

##### `postgresDatabase`<sup>Optional</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

### PostgresSyncedTableSpecNewPipelineSpec <a name="PostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableSpecNewPipelineSpec;

PostgresSyncedTableSpecNewPipelineSpec.builder()
//  .budgetPolicyId(java.lang.String)
//  .storageCatalog(java.lang.String)
//  .storageSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storageCatalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storageSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

##### `storageCatalog`<sup>Optional</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```java
public java.lang.String getStorageCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

##### `storageSchema`<sup>Optional</sup> <a name="storageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```java
public java.lang.String getStorageSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

### PostgresSyncedTableStatus <a name="PostgresSyncedTableStatus" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatus;

PostgresSyncedTableStatus.builder()
    .build();
```


### PostgresSyncedTableStatusLastSync <a name="PostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusLastSync;

PostgresSyncedTableStatusLastSync.builder()
    .build();
```


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo;

PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.builder()
    .build();
```


### PostgresSyncedTableStatusOngoingSyncProgress <a name="PostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusOngoingSyncProgress;

PostgresSyncedTableStatusOngoingSyncProgress.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresSyncedTableProviderConfigOutputReference <a name="PostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableProviderConfigOutputReference;

new PostgresSyncedTableProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSyncedTableProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---


### PostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="PostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableSpecNewPipelineSpecOutputReference;

new PostgresSyncedTableSpecNewPipelineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">resetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">resetStorageSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetStorageCatalog` <a name="resetStorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```java
public void resetStorageCatalog()
```

##### `resetStorageSchema` <a name="resetStorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```java
public void resetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storageCatalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storageSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storageCatalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storageSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `storageCatalogInput`<sup>Optional</sup> <a name="storageCatalogInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```java
public java.lang.String getStorageCatalogInput();
```

- *Type:* java.lang.String

---

##### `storageSchemaInput`<sup>Optional</sup> <a name="storageSchemaInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```java
public java.lang.String getStorageSchemaInput();
```

- *Type:* java.lang.String

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `storageCatalog`<sup>Required</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```java
public java.lang.String getStorageCatalog();
```

- *Type:* java.lang.String

---

##### `storageSchema`<sup>Required</sup> <a name="storageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```java
public java.lang.String getStorageSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSyncedTableSpecNewPipelineSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---


### PostgresSyncedTableSpecOutputReference <a name="PostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableSpecOutputReference;

new PostgresSyncedTableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec">putNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">resetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId">resetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">resetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase">resetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNewPipelineSpec` <a name="putNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```java
public void putNewPipelineSpec(PostgresSyncedTableSpecNewPipelineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCreateDatabaseObjectsIfMissing` <a name="resetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```java
public void resetCreateDatabaseObjectsIfMissing()
```

##### `resetExistingPipelineId` <a name="resetExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```java
public void resetExistingPipelineId()
```

##### `resetNewPipelineSpec` <a name="resetNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```java
public void resetNewPipelineSpec()
```

##### `resetPostgresDatabase` <a name="resetPostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```java
public void resetPostgresDatabase()
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```java
public void resetPrimaryKeyColumns()
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```java
public void resetSchedulingPolicy()
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```java
public void resetSourceTableFullName()
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```java
public void resetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">createDatabaseObjectsIfMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existingPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">newPipelineSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId">existingPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newPipelineSpec`<sup>Required</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```java
public PostgresSyncedTableSpecNewPipelineSpecOutputReference getNewPipelineSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `createDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `existingPipelineIdInput`<sup>Optional</sup> <a name="existingPipelineIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```java
public java.lang.String getExistingPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `newPipelineSpecInput`<sup>Optional</sup> <a name="newPipelineSpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```java
public IResolvable|PostgresSyncedTableSpecNewPipelineSpec getNewPipelineSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```java
public java.lang.String getPostgresDatabaseInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```java
public java.lang.String getSchedulingPolicyInput();
```

- *Type:* java.lang.String

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```java
public java.lang.String getSourceTableFullNameInput();
```

- *Type:* java.lang.String

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```java
public java.lang.String getTimeseriesKeyInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `createDatabaseObjectsIfMissing`<sup>Required</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `existingPipelineId`<sup>Required</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```java
public java.lang.String getExistingPipelineId();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresSyncedTableSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference;

new PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">deltaCommitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">deltaCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaCommitTime`<sup>Required</sup> <a name="deltaCommitTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```java
public java.lang.String getDeltaCommitTime();
```

- *Type:* java.lang.String

---

##### `deltaCommitVersion`<sup>Required</sup> <a name="deltaCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```java
public java.lang.Number getDeltaCommitVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```java
public PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### PostgresSyncedTableStatusLastSyncOutputReference <a name="PostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusLastSyncOutputReference;

new PostgresSyncedTableStatusLastSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">deltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">syncEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">syncStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTableSyncInfo`<sup>Required</sup> <a name="deltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```java
public PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference getDeltaTableSyncInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `syncEndTime`<sup>Required</sup> <a name="syncEndTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```java
public java.lang.String getSyncEndTime();
```

- *Type:* java.lang.String

---

##### `syncStartTime`<sup>Required</sup> <a name="syncStartTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```java
public java.lang.String getSyncStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```java
public PostgresSyncedTableStatusLastSync getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a>

---


### PostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="PostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusOngoingSyncProgressOutputReference;

new PostgresSyncedTableStatusOngoingSyncProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```java
public java.lang.Number getEstimatedCompletionTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```java
public java.lang.Number getLatestVersionCurrentlyProcessing();
```

- *Type:* java.lang.Number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```java
public java.lang.Number getSyncedRowCount();
```

- *Type:* java.lang.Number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```java
public java.lang.Number getSyncProgressCompletion();
```

- *Type:* java.lang.Number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```java
public java.lang.Number getTotalRowCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```java
public PostgresSyncedTableStatusOngoingSyncProgress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a>

---


### PostgresSyncedTableStatusOutputReference <a name="PostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_synced_table.PostgresSyncedTableStatusOutputReference;

new PostgresSyncedTableStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync">lastSync</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime">lastSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```java
public java.lang.String getDetailedState();
```

- *Type:* java.lang.String

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```java
public java.lang.Number getLastProcessedCommitVersion();
```

- *Type:* java.lang.Number

---

##### `lastSync`<sup>Required</sup> <a name="lastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```java
public PostgresSyncedTableStatusLastSyncOutputReference getLastSync();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```java
public java.lang.String getLastSyncTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `ongoingSyncProgress`<sup>Required</sup> <a name="ongoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```java
public PostgresSyncedTableStatusOngoingSyncProgressOutputReference getOngoingSyncProgress();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```java
public java.lang.String getProvisioningPhase();
```

- *Type:* java.lang.String

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```java
public java.lang.String getUnityCatalogProvisioningState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```java
public PostgresSyncedTableStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a>

---



