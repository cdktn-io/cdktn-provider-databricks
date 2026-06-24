# `postgresBranch` Submodule <a name="`postgresBranch` Submodule" id="@cdktn/provider-databricks.postgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresBranch <a name="PostgresBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranch;

PostgresBranch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branchId(java.lang.String)
    .parent(java.lang.String)
//  .providerConfig(PostgresBranchProviderConfig)
//  .purgeOnDelete(java.lang.Boolean|IResolvable)
//  .replaceExisting(java.lang.Boolean|IResolvable)
//  .spec(PostgresBranchSpec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.branchId">branchId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.replaceExisting">replaceExisting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.branchId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.purgeOnDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `replaceExisting`<sup>Optional</sup> <a name="replaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.replaceExisting"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete">resetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting">resetReplaceExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresBranchProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec"></a>

```java
public void putSpec(PostgresBranchSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetPurgeOnDelete` <a name="resetPurgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete"></a>

```java
public void resetPurgeOnDelete()
```

##### `resetReplaceExisting` <a name="resetReplaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting"></a>

```java
public void resetReplaceExisting()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranch;

PostgresBranch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranch;

PostgresBranch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranch;

PostgresBranch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranch;

PostgresBranch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresBranch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput">branchIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput">purgeOnDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput">replaceExistingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId">branchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting">replaceExisting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig"></a>

```java
public PostgresBranchProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec"></a>

```java
public PostgresBranchSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status"></a>

```java
public PostgresBranchStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `branchIdInput`<sup>Optional</sup> <a name="branchIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput"></a>

```java
public java.lang.String getBranchIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput"></a>

```java
public IResolvable|PostgresBranchProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `purgeOnDeleteInput`<sup>Optional</sup> <a name="purgeOnDeleteInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceExistingInput`<sup>Optional</sup> <a name="replaceExistingInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExistingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput"></a>

```java
public IResolvable|PostgresBranchSpec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId"></a>

```java
public java.lang.String getBranchId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `purgeOnDelete`<sup>Required</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceExisting`<sup>Required</sup> <a name="replaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExisting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresBranchConfig <a name="PostgresBranchConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchConfig;

PostgresBranchConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branchId(java.lang.String)
    .parent(java.lang.String)
//  .providerConfig(PostgresBranchProviderConfig)
//  .purgeOnDelete(java.lang.Boolean|IResolvable)
//  .replaceExisting(java.lang.Boolean|IResolvable)
//  .spec(PostgresBranchSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId">branchId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete">purgeOnDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting">replaceExisting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId"></a>

```java
public java.lang.String getBranchId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig"></a>

```java
public PostgresBranchProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `purgeOnDelete`<sup>Optional</sup> <a name="purgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPurgeOnDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `replaceExisting`<sup>Optional</sup> <a name="replaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting"></a>

```java
public java.lang.Boolean|IResolvable getReplaceExisting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec"></a>

```java
public PostgresBranchSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

### PostgresBranchProviderConfig <a name="PostgresBranchProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchProviderConfig;

PostgresBranchProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}.

---

### PostgresBranchSpec <a name="PostgresBranchSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchSpec;

PostgresBranchSpec.builder()
//  .expireTime(java.lang.String)
//  .isProtected(java.lang.Boolean|IResolvable)
//  .noExpiry(java.lang.Boolean|IResolvable)
//  .sourceBranch(java.lang.String)
//  .sourceBranchLsn(java.lang.String)
//  .sourceBranchTime(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}. |

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}.

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}.

---

##### `sourceBranchLsn`<sup>Optional</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}.

---

##### `sourceBranchTime`<sup>Optional</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}.

---

### PostgresBranchStatus <a name="PostgresBranchStatus" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchStatus;

PostgresBranchStatus.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresBranchProviderConfigOutputReference <a name="PostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchProviderConfigOutputReference;

new PostgresBranchProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresBranchProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---


### PostgresBranchSpecOutputReference <a name="PostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchSpecOutputReference;

new PostgresBranchSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn">resetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime">resetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected"></a>

```java
public void resetIsProtected()
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry"></a>

```java
public void resetNoExpiry()
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch"></a>

```java
public void resetSourceBranch()
```

##### `resetSourceBranchLsn` <a name="resetSourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```java
public void resetSourceBranchLsn()
```

##### `resetSourceBranchTime` <a name="resetSourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```java
public void resetSourceBranchTime()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput">noExpiryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput">sourceBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput">sourceBranchLsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput">sourceBranchTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsProtectedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```java
public java.lang.String getSourceBranchInput();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsnInput`<sup>Optional</sup> <a name="sourceBranchLsnInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```java
public java.lang.String getSourceBranchLsnInput();
```

- *Type:* java.lang.String

---

##### `sourceBranchTimeInput`<sup>Optional</sup> <a name="sourceBranchTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```java
public java.lang.String getSourceBranchTimeInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresBranchSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---


### PostgresBranchStatusOutputReference <a name="PostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.postgres_branch.PostgresBranchStatusOutputReference;

new PostgresBranchStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId">branchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState">currentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default">default</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected">isProtected</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState">pendingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime">purgeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime">stateChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId"></a>

```java
public java.lang.String getBranchId();
```

- *Type:* java.lang.String

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState"></a>

```java
public java.lang.String getCurrentState();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected"></a>

```java
public IResolvable getIsProtected();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logicalSizeBytes`<sup>Required</sup> <a name="logicalSizeBytes" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```java
public java.lang.Number getLogicalSizeBytes();
```

- *Type:* java.lang.Number

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState"></a>

```java
public java.lang.String getPendingState();
```

- *Type:* java.lang.String

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime"></a>

```java
public java.lang.String getPurgeTime();
```

- *Type:* java.lang.String

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

---

##### `stateChangeTime`<sup>Required</sup> <a name="stateChangeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```java
public java.lang.String getStateChangeTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue"></a>

```java
public PostgresBranchStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a>

---



