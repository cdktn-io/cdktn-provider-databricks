# `masonManagedMemoryStore` Submodule <a name="`masonManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryStore <a name="MasonManagedMemoryStore" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store databricks_mason_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStore;

MasonManagedMemoryStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedMemoryStoreId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .providerConfig(MasonManagedMemoryStoreProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.managedMemoryStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig"></a>

```java
public void putProviderConfig(MasonManagedMemoryStoreProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MasonManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStore;

MasonManagedMemoryStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStore;

MasonManagedMemoryStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStore;

MasonManagedMemoryStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStore;

MasonManagedMemoryStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MasonManagedMemoryStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MasonManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MasonManagedMemoryStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MasonManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.creatorUserId">creatorUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.ownerUserId">ownerUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference">MasonManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.storageBackend">storageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference">MasonManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreIdInput">managedMemoryStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.creatorUserId"></a>

```java
public java.lang.String getCreatorUserId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerUserId`<sup>Required</sup> <a name="ownerUserId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.ownerUserId"></a>

```java
public java.lang.String getOwnerUserId();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfig"></a>

```java
public MasonManagedMemoryStoreProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference">MasonManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `storageBackend`<sup>Required</sup> <a name="storageBackend" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.storageBackend"></a>

```java
public MasonManagedMemoryStoreStorageBackendOutputReference getStorageBackend();
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference">MasonManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `managedMemoryStoreIdInput`<sup>Optional</sup> <a name="managedMemoryStoreIdInput" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreIdInput"></a>

```java
public java.lang.String getManagedMemoryStoreIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfigInput"></a>

```java
public IResolvable|MasonManagedMemoryStoreProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreId"></a>

```java
public java.lang.String getManagedMemoryStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryStoreConfig <a name="MasonManagedMemoryStoreConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStoreConfig;

MasonManagedMemoryStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedMemoryStoreId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .providerConfig(MasonManagedMemoryStoreProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.managedMemoryStoreId"></a>

```java
public java.lang.String getManagedMemoryStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.providerConfig"></a>

```java
public MasonManagedMemoryStoreProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}.

---

### MasonManagedMemoryStoreProviderConfig <a name="MasonManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStoreProviderConfig;

MasonManagedMemoryStoreProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#workspace_id MasonManagedMemoryStore#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#workspace_id MasonManagedMemoryStore#workspace_id}.

---

### MasonManagedMemoryStoreStorageBackend <a name="MasonManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStoreStorageBackend;

MasonManagedMemoryStoreStorageBackend.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryStoreProviderConfigOutputReference <a name="MasonManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStoreProviderConfigOutputReference;

new MasonManagedMemoryStoreProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|MasonManagedMemoryStoreProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

---


### MasonManagedMemoryStoreStorageBackendOutputReference <a name="MasonManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mason_managed_memory_store.MasonManagedMemoryStoreStorageBackendOutputReference;

new MasonManagedMemoryStoreStorageBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendId">backendId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendType">backendType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend">MasonManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendId`<sup>Required</sup> <a name="backendId" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```java
public java.lang.String getBackendId();
```

- *Type:* java.lang.String

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```java
public java.lang.String getBackendType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```java
public MasonManagedMemoryStoreStorageBackend getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend">MasonManagedMemoryStoreStorageBackend</a>

---



