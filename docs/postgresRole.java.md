# `postgresRole` Submodule <a name="`postgresRole` Submodule" id="@cdktn/provider-databricks.postgresRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresRole <a name="PostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRole"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role databricks_postgres_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRole;

PostgresRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .providerConfig(PostgresRoleProviderConfig)
//  .roleId(java.lang.String)
//  .spec(PostgresRoleSpec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#parent PostgresRole#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#provider_config PostgresRole#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#role_id PostgresRole#role_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#spec PostgresRole#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#parent PostgresRole#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#provider_config PostgresRole#provider_config}.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#role_id PostgresRole#role_id}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#spec PostgresRole#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetRoleId">resetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresRole.PostgresRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresRole.PostgresRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresRole.PostgresRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresRole.PostgresRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresRole.PostgresRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresRoleProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec"></a>

```java
public void putSpec(PostgresRoleSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRole.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetRoleId` <a name="resetRoleId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetRoleId"></a>

```java
public void resetRoleId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRole;

PostgresRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRole;

PostgresRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRole;

PostgresRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresRole.PostgresRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRole;

PostgresRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference">PostgresRoleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference">PostgresRoleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference">PostgresRoleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfig"></a>

```java
public PostgresRoleProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference">PostgresRoleProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.spec"></a>

```java
public PostgresRoleSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference">PostgresRoleSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.status"></a>

```java
public PostgresRoleStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference">PostgresRoleStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.providerConfigInput"></a>

```java
public IResolvable|PostgresRoleProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.specInput"></a>

```java
public IResolvable|PostgresRoleSpec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresRole.PostgresRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresRoleConfig <a name="PostgresRoleConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleConfig;

PostgresRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .providerConfig(PostgresRoleProviderConfig)
//  .roleId(java.lang.String)
//  .spec(PostgresRoleSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#parent PostgresRole#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#provider_config PostgresRole#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#role_id PostgresRole#role_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#spec PostgresRole#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#parent PostgresRole#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.providerConfig"></a>

```java
public PostgresRoleProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#provider_config PostgresRole#provider_config}.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#role_id PostgresRole#role_id}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresRole.PostgresRoleConfig.property.spec"></a>

```java
public PostgresRoleSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#spec PostgresRole#spec}.

---

### PostgresRoleProviderConfig <a name="PostgresRoleProviderConfig" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleProviderConfig;

PostgresRoleProviderConfig.builder()
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#workspace_id PostgresRole#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#workspace_id PostgresRole#workspace_id}.

---

### PostgresRoleSpec <a name="PostgresRoleSpec" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleSpec;

PostgresRoleSpec.builder()
//  .attributes(PostgresRoleSpecAttributes)
//  .authMethod(java.lang.String)
//  .identityType(java.lang.String)
//  .membershipRoles(java.util.List<java.lang.String>)
//  .postgresRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#attributes PostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#auth_method PostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#identity_type PostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.attributes"></a>

```java
public PostgresRoleSpecAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#attributes PostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#auth_method PostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#identity_type PostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpec.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}.

---

### PostgresRoleSpecAttributes <a name="PostgresRoleSpecAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleSpecAttributes;

PostgresRoleSpecAttributes.builder()
//  .bypassrls(java.lang.Boolean|IResolvable)
//  .createdb(java.lang.Boolean|IResolvable)
//  .createrole(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createdb PostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createrole PostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createdb PostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createrole PostgresRole#createrole}.

---

### PostgresRoleStatus <a name="PostgresRoleStatus" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleStatus;

PostgresRoleStatus.builder()
//  .attributes(PostgresRoleStatusAttributes)
//  .authMethod(java.lang.String)
//  .identityType(java.lang.String)
//  .membershipRoles(java.util.List<java.lang.String>)
//  .postgresRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#attributes PostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#auth_method PostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#identity_type PostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.attributes"></a>

```java
public PostgresRoleStatusAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#attributes PostgresRole#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#auth_method PostgresRole#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#identity_type PostgresRole#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#membership_roles PostgresRole#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatus.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#postgres_role PostgresRole#postgres_role}.

---

### PostgresRoleStatusAttributes <a name="PostgresRoleStatusAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleStatusAttributes;

PostgresRoleStatusAttributes.builder()
//  .bypassrls(java.lang.Boolean|IResolvable)
//  .createdb(java.lang.Boolean|IResolvable)
//  .createrole(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createdb PostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createrole PostgresRole#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#bypassrls PostgresRole#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createdb PostgresRole#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_role#createrole PostgresRole#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresRoleProviderConfigOutputReference <a name="PostgresRoleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleProviderConfigOutputReference;

new PostgresRoleProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresRoleProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleProviderConfig">PostgresRoleProviderConfig</a>

---


### PostgresRoleSpecAttributesOutputReference <a name="PostgresRoleSpecAttributesOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleSpecAttributesOutputReference;

new PostgresRoleSpecAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetBypassrls"></a>

```java
public void resetBypassrls()
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreatedb"></a>

```java
public void resetCreatedb()
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.resetCreaterole"></a>

```java
public void resetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrlsInput"></a>

```java
public java.lang.Boolean|IResolvable getBypassrlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdbInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatedbInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createroleInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateroleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresRoleSpecAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---


### PostgresRoleSpecOutputReference <a name="PostgresRoleSpecOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleSpecOutputReference;

new PostgresRoleSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes"></a>

```java
public void putAttributes(PostgresRoleSpecAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetMembershipRoles"></a>

```java
public void resetMembershipRoles()
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.resetPostgresRole"></a>

```java
public void resetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference">PostgresRoleSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributes"></a>

```java
public PostgresRoleSpecAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributesOutputReference">PostgresRoleSpecAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.attributesInput"></a>

```java
public IResolvable|PostgresRoleSpecAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpecAttributes">PostgresRoleSpecAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRolesInput"></a>

```java
public java.util.List<java.lang.String> getMembershipRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRoleInput"></a>

```java
public java.lang.String getPostgresRoleInput();
```

- *Type:* java.lang.String

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresRoleSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleSpec">PostgresRoleSpec</a>

---


### PostgresRoleStatusAttributesOutputReference <a name="PostgresRoleStatusAttributesOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleStatusAttributesOutputReference;

new PostgresRoleStatusAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetBypassrls"></a>

```java
public void resetBypassrls()
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreatedb"></a>

```java
public void resetCreatedb()
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.resetCreaterole"></a>

```java
public void resetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrlsInput"></a>

```java
public java.lang.Boolean|IResolvable getBypassrlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdbInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatedbInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createroleInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateroleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresRoleStatusAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---


### PostgresRoleStatusOutputReference <a name="PostgresRoleStatusOutputReference" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_role.PostgresRoleStatusOutputReference;

new PostgresRoleStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes"></a>

```java
public void putAttributes(PostgresRoleStatusAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetMembershipRoles"></a>

```java
public void resetMembershipRoles()
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.resetPostgresRole"></a>

```java
public void resetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference">PostgresRoleStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus">PostgresRoleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributes"></a>

```java
public PostgresRoleStatusAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributesOutputReference">PostgresRoleStatusAttributesOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.attributesInput"></a>

```java
public IResolvable|PostgresRoleStatusAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatusAttributes">PostgresRoleStatusAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRolesInput"></a>

```java
public java.util.List<java.lang.String> getMembershipRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRoleInput"></a>

```java
public java.lang.String getPostgresRoleInput();
```

- *Type:* java.lang.String

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresRole.PostgresRoleStatusOutputReference.property.internalValue"></a>

```java
public PostgresRoleStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresRole.PostgresRoleStatus">PostgresRoleStatus</a>

---



