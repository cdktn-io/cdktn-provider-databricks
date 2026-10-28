# `agentKitManagedMemoryStore` Submodule <a name="`agentKitManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.agentKitManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentKitManagedMemoryStore <a name="AgentKitManagedMemoryStore" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store databricks_agent_kit_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStore;

AgentKitManagedMemoryStore.Builder.create(Construct scope, java.lang.String id)
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
//  .providerConfig(AgentKitManagedMemoryStoreProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#managed_memory_store_id AgentKitManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#description AgentKitManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#display_name AgentKitManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#provider_config AgentKitManagedMemoryStore#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.managedMemoryStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#managed_memory_store_id AgentKitManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#description AgentKitManagedMemoryStore#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#display_name AgentKitManagedMemoryStore#display_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#provider_config AgentKitManagedMemoryStore#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.putProviderConfig"></a>

```java
public void putProviderConfig(AgentKitManagedMemoryStoreProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentKitManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isConstruct"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStore;

AgentKitManagedMemoryStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStore;

AgentKitManagedMemoryStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStore;

AgentKitManagedMemoryStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStore;

AgentKitManagedMemoryStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AgentKitManagedMemoryStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AgentKitManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AgentKitManagedMemoryStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AgentKitManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AgentKitManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.creatorUserId">creatorUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.ownerUserId">ownerUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference">AgentKitManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.storageBackend">storageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference">AgentKitManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.managedMemoryStoreIdInput">managedMemoryStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.creatorUserId"></a>

```java
public java.lang.String getCreatorUserId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerUserId`<sup>Required</sup> <a name="ownerUserId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.ownerUserId"></a>

```java
public java.lang.String getOwnerUserId();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.providerConfig"></a>

```java
public AgentKitManagedMemoryStoreProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference">AgentKitManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `storageBackend`<sup>Required</sup> <a name="storageBackend" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.storageBackend"></a>

```java
public AgentKitManagedMemoryStoreStorageBackendOutputReference getStorageBackend();
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference">AgentKitManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `managedMemoryStoreIdInput`<sup>Optional</sup> <a name="managedMemoryStoreIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.managedMemoryStoreIdInput"></a>

```java
public java.lang.String getManagedMemoryStoreIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.providerConfigInput"></a>

```java
public IResolvable|AgentKitManagedMemoryStoreProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.managedMemoryStoreId"></a>

```java
public java.lang.String getManagedMemoryStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AgentKitManagedMemoryStoreConfig <a name="AgentKitManagedMemoryStoreConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStoreConfig;

AgentKitManagedMemoryStoreConfig.builder()
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
//  .providerConfig(AgentKitManagedMemoryStoreProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.managedMemoryStoreId">managedMemoryStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#managed_memory_store_id AgentKitManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#description AgentKitManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#display_name AgentKitManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#provider_config AgentKitManagedMemoryStore#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedMemoryStoreId`<sup>Required</sup> <a name="managedMemoryStoreId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.managedMemoryStoreId"></a>

```java
public java.lang.String getManagedMemoryStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#managed_memory_store_id AgentKitManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#description AgentKitManagedMemoryStore#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#display_name AgentKitManagedMemoryStore#display_name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreConfig.property.providerConfig"></a>

```java
public AgentKitManagedMemoryStoreProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#provider_config AgentKitManagedMemoryStore#provider_config}.

---

### AgentKitManagedMemoryStoreProviderConfig <a name="AgentKitManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStoreProviderConfig;

AgentKitManagedMemoryStoreProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#workspace_id AgentKitManagedMemoryStore#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_store#workspace_id AgentKitManagedMemoryStore#workspace_id}.

---

### AgentKitManagedMemoryStoreStorageBackend <a name="AgentKitManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackend.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStoreStorageBackend;

AgentKitManagedMemoryStoreStorageBackend.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### AgentKitManagedMemoryStoreProviderConfigOutputReference <a name="AgentKitManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStoreProviderConfigOutputReference;

new AgentKitManagedMemoryStoreProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AgentKitManagedMemoryStoreProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreProviderConfig">AgentKitManagedMemoryStoreProviderConfig</a>

---


### AgentKitManagedMemoryStoreStorageBackendOutputReference <a name="AgentKitManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.agent_kit_managed_memory_store.AgentKitManagedMemoryStoreStorageBackendOutputReference;

new AgentKitManagedMemoryStoreStorageBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.backendId">backendId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.backendType">backendType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackend">AgentKitManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendId`<sup>Required</sup> <a name="backendId" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```java
public java.lang.String getBackendId();
```

- *Type:* java.lang.String

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```java
public java.lang.String getBackendType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```java
public AgentKitManagedMemoryStoreStorageBackend getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryStore.AgentKitManagedMemoryStoreStorageBackend">AgentKitManagedMemoryStoreStorageBackend</a>

---



