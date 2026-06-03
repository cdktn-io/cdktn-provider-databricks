# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktn/provider-databricks.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination databricks_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestination;

NotificationDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .config(NotificationDestinationConfigA)
//  .destinationType(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(NotificationDestinationProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#id NotificationDestination#id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.destinationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#provider_config NotificationDestination#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig"></a>

```java
public void putConfig(NotificationDestinationConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig"></a>

```java
public void putProviderConfig(NotificationDestinationProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetId"></a>

```java
public void resetId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestination;

NotificationDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestination;

NotificationDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestination;

NotificationDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestination;

NotificationDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NotificationDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NotificationDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NotificationDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.config"></a>

```java
public NotificationDestinationConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfig"></a>

```java
public NotificationDestinationProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.configInput"></a>

```java
public NotificationDestinationConfigA getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput"></a>

```java
public NotificationDestinationProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfig;

NotificationDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .config(NotificationDestinationConfigA)
//  .destinationType(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(NotificationDestinationProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#id NotificationDestination#id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config"></a>

```java
public NotificationDestinationConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig"></a>

```java
public NotificationDestinationProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#provider_config NotificationDestination#provider_config}

---

### NotificationDestinationConfigA <a name="NotificationDestinationConfigA" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigA;

NotificationDestinationConfigA.builder()
//  .email(NotificationDestinationConfigEmail)
//  .genericWebhook(NotificationDestinationConfigGenericWebhook)
//  .microsoftTeams(NotificationDestinationConfigMicrosoftTeams)
//  .pagerduty(NotificationDestinationConfigPagerduty)
//  .slack(NotificationDestinationConfigSlack)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email">email</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook">genericWebhook</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | generic_webhook block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email"></a>

```java
public NotificationDestinationConfigEmail getEmail();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#email NotificationDestination#email}

---

##### `genericWebhook`<sup>Optional</sup> <a name="genericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook"></a>

```java
public NotificationDestinationConfigGenericWebhook getGenericWebhook();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

##### `microsoftTeams`<sup>Optional</sup> <a name="microsoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams"></a>

```java
public NotificationDestinationConfigMicrosoftTeams getMicrosoftTeams();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty"></a>

```java
public NotificationDestinationConfigPagerduty getPagerduty();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack"></a>

```java
public NotificationDestinationConfigSlack getSlack();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#slack NotificationDestination#slack}

---

### NotificationDestinationConfigEmail <a name="NotificationDestinationConfigEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigEmail;

NotificationDestinationConfigEmail.builder()
//  .addresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

### NotificationDestinationConfigGenericWebhook <a name="NotificationDestinationConfigGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigGenericWebhook;

NotificationDestinationConfigGenericWebhook.builder()
//  .password(java.lang.String)
//  .passwordSet(java.lang.Boolean|IResolvable)
//  .url(java.lang.String)
//  .urlSet(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
//  .usernameSet(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet">passwordSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#username NotificationDestination#username}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet">usernameSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `passwordSet`<sup>Optional</sup> <a name="passwordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet"></a>

```java
public java.lang.Boolean|IResolvable getPasswordSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#username NotificationDestination#username}.

---

##### `usernameSet`<sup>Optional</sup> <a name="usernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet"></a>

```java
public java.lang.Boolean|IResolvable getUsernameSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

### NotificationDestinationConfigMicrosoftTeams <a name="NotificationDestinationConfigMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigMicrosoftTeams;

NotificationDestinationConfigMicrosoftTeams.builder()
//  .appId(java.lang.String)
//  .appIdSet(java.lang.Boolean|IResolvable)
//  .authSecret(java.lang.String)
//  .authSecretSet(java.lang.Boolean|IResolvable)
//  .channelUrl(java.lang.String)
//  .channelUrlSet(java.lang.Boolean|IResolvable)
//  .tenantId(java.lang.String)
//  .tenantIdSet(java.lang.Boolean|IResolvable)
//  .url(java.lang.String)
//  .urlSet(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet">appIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret">authSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet">authSecretSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl">channelUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet">channelUrlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet">tenantIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}.

---

##### `appIdSet`<sup>Optional</sup> <a name="appIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet"></a>

```java
public java.lang.Boolean|IResolvable getAppIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}.

---

##### `authSecret`<sup>Optional</sup> <a name="authSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret"></a>

```java
public java.lang.String getAuthSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}.

---

##### `authSecretSet`<sup>Optional</sup> <a name="authSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet"></a>

```java
public java.lang.Boolean|IResolvable getAuthSecretSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}.

---

##### `channelUrl`<sup>Optional</sup> <a name="channelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl"></a>

```java
public java.lang.String getChannelUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}.

---

##### `channelUrlSet`<sup>Optional</sup> <a name="channelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet"></a>

```java
public java.lang.Boolean|IResolvable getChannelUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}.

---

##### `tenantIdSet`<sup>Optional</sup> <a name="tenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet"></a>

```java
public java.lang.Boolean|IResolvable getTenantIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationConfigPagerduty <a name="NotificationDestinationConfigPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigPagerduty;

NotificationDestinationConfigPagerduty.builder()
//  .integrationKey(java.lang.String)
//  .integrationKeySet(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet">integrationKeySet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}. |

---

##### `integrationKey`<sup>Optional</sup> <a name="integrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

##### `integrationKeySet`<sup>Optional</sup> <a name="integrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet"></a>

```java
public java.lang.Boolean|IResolvable getIntegrationKeySet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

### NotificationDestinationConfigSlack <a name="NotificationDestinationConfigSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigSlack;

NotificationDestinationConfigSlack.builder()
//  .channelId(java.lang.String)
//  .channelIdSet(java.lang.Boolean|IResolvable)
//  .oauthToken(java.lang.String)
//  .oauthTokenSet(java.lang.Boolean|IResolvable)
//  .url(java.lang.String)
//  .urlSet(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId">channelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet">channelIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet">oauthTokenSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}.

---

##### `channelIdSet`<sup>Optional</sup> <a name="channelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet"></a>

```java
public java.lang.Boolean|IResolvable getChannelIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}.

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}.

---

##### `oauthTokenSet`<sup>Optional</sup> <a name="oauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet"></a>

```java
public java.lang.Boolean|IResolvable getOauthTokenSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `urlSet`<sup>Optional</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationProviderConfig <a name="NotificationDestinationProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationProviderConfig;

NotificationDestinationProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationConfigAOutputReference <a name="NotificationDestinationConfigAOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigAOutputReference;

new NotificationDestinationConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook">putGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams">putMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook">resetGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams">resetMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty">resetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmail` <a name="putEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail"></a>

```java
public void putEmail(NotificationDestinationConfigEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `putGenericWebhook` <a name="putGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook"></a>

```java
public void putGenericWebhook(NotificationDestinationConfigGenericWebhook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `putMicrosoftTeams` <a name="putMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams"></a>

```java
public void putMicrosoftTeams(NotificationDestinationConfigMicrosoftTeams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `putPagerduty` <a name="putPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty"></a>

```java
public void putPagerduty(NotificationDestinationConfigPagerduty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack"></a>

```java
public void putSlack(NotificationDestinationConfigSlack value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetGenericWebhook` <a name="resetGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook"></a>

```java
public void resetGenericWebhook()
```

##### `resetMicrosoftTeams` <a name="resetMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams"></a>

```java
public void resetMicrosoftTeams()
```

##### `resetPagerduty` <a name="resetPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty"></a>

```java
public void resetPagerduty()
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack"></a>

```java
public void resetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email">email</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook">genericWebhook</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams">microsoftTeams</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput">genericWebhookInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput">microsoftTeamsInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput">pagerdutyInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput">slackInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email"></a>

```java
public NotificationDestinationConfigEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a>

---

##### `genericWebhook`<sup>Required</sup> <a name="genericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook"></a>

```java
public NotificationDestinationConfigGenericWebhookOutputReference getGenericWebhook();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a>

---

##### `microsoftTeams`<sup>Required</sup> <a name="microsoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams"></a>

```java
public NotificationDestinationConfigMicrosoftTeamsOutputReference getMicrosoftTeams();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty"></a>

```java
public NotificationDestinationConfigPagerdutyOutputReference getPagerduty();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack"></a>

```java
public NotificationDestinationConfigSlackOutputReference getSlack();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput"></a>

```java
public NotificationDestinationConfigEmail getEmailInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `genericWebhookInput`<sup>Optional</sup> <a name="genericWebhookInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput"></a>

```java
public NotificationDestinationConfigGenericWebhook getGenericWebhookInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `microsoftTeamsInput`<sup>Optional</sup> <a name="microsoftTeamsInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput"></a>

```java
public NotificationDestinationConfigMicrosoftTeams getMicrosoftTeamsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput"></a>

```java
public NotificationDestinationConfigPagerduty getPagerdutyInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput"></a>

```java
public NotificationDestinationConfigSlack getSlackInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---


### NotificationDestinationConfigEmailOutputReference <a name="NotificationDestinationConfigEmailOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigEmailOutputReference;

new NotificationDestinationConfigEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses">resetAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddresses` <a name="resetAddresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses"></a>

```java
public void resetAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigEmail getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---


### NotificationDestinationConfigGenericWebhookOutputReference <a name="NotificationDestinationConfigGenericWebhookOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigGenericWebhookOutputReference;

new NotificationDestinationConfigGenericWebhookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet">resetPasswordSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet">resetUsernameSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordSet` <a name="resetPasswordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet"></a>

```java
public void resetPasswordSet()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet"></a>

```java
public void resetUrlSet()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUsernameSet` <a name="resetUsernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet"></a>

```java
public void resetUsernameSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput">passwordSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput">usernameSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet">passwordSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet">usernameSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordSetInput`<sup>Optional</sup> <a name="passwordSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput"></a>

```java
public java.lang.Boolean|IResolvable getPasswordSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput"></a>

```java
public java.lang.Boolean|IResolvable getUrlSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameSetInput`<sup>Optional</sup> <a name="usernameSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput"></a>

```java
public java.lang.Boolean|IResolvable getUsernameSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordSet`<sup>Required</sup> <a name="passwordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet"></a>

```java
public java.lang.Boolean|IResolvable getPasswordSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameSet`<sup>Required</sup> <a name="usernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet"></a>

```java
public java.lang.Boolean|IResolvable getUsernameSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigGenericWebhook getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---


### NotificationDestinationConfigMicrosoftTeamsOutputReference <a name="NotificationDestinationConfigMicrosoftTeamsOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigMicrosoftTeamsOutputReference;

new NotificationDestinationConfigMicrosoftTeamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet">resetAppIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret">resetAuthSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet">resetAuthSecretSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl">resetChannelUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet">resetChannelUrlSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet">resetTenantIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppId` <a name="resetAppId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId"></a>

```java
public void resetAppId()
```

##### `resetAppIdSet` <a name="resetAppIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet"></a>

```java
public void resetAppIdSet()
```

##### `resetAuthSecret` <a name="resetAuthSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret"></a>

```java
public void resetAuthSecret()
```

##### `resetAuthSecretSet` <a name="resetAuthSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet"></a>

```java
public void resetAuthSecretSet()
```

##### `resetChannelUrl` <a name="resetChannelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl"></a>

```java
public void resetChannelUrl()
```

##### `resetChannelUrlSet` <a name="resetChannelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet"></a>

```java
public void resetChannelUrlSet()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTenantIdSet` <a name="resetTenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet"></a>

```java
public void resetTenantIdSet()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet"></a>

```java
public void resetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput">appIdSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput">authSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput">authSecretSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput">channelUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput">channelUrlSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput">tenantIdSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet">appIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret">authSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet">authSecretSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl">channelUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet">channelUrlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet">tenantIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `appIdSetInput`<sup>Optional</sup> <a name="appIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput"></a>

```java
public java.lang.Boolean|IResolvable getAppIdSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authSecretInput`<sup>Optional</sup> <a name="authSecretInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput"></a>

```java
public java.lang.String getAuthSecretInput();
```

- *Type:* java.lang.String

---

##### `authSecretSetInput`<sup>Optional</sup> <a name="authSecretSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput"></a>

```java
public java.lang.Boolean|IResolvable getAuthSecretSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelUrlInput`<sup>Optional</sup> <a name="channelUrlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput"></a>

```java
public java.lang.String getChannelUrlInput();
```

- *Type:* java.lang.String

---

##### `channelUrlSetInput`<sup>Optional</sup> <a name="channelUrlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput"></a>

```java
public java.lang.Boolean|IResolvable getChannelUrlSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdSetInput`<sup>Optional</sup> <a name="tenantIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput"></a>

```java
public java.lang.Boolean|IResolvable getTenantIdSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput"></a>

```java
public java.lang.Boolean|IResolvable getUrlSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appIdSet`<sup>Required</sup> <a name="appIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet"></a>

```java
public java.lang.Boolean|IResolvable getAppIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authSecret`<sup>Required</sup> <a name="authSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret"></a>

```java
public java.lang.String getAuthSecret();
```

- *Type:* java.lang.String

---

##### `authSecretSet`<sup>Required</sup> <a name="authSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet"></a>

```java
public java.lang.Boolean|IResolvable getAuthSecretSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelUrl`<sup>Required</sup> <a name="channelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl"></a>

```java
public java.lang.String getChannelUrl();
```

- *Type:* java.lang.String

---

##### `channelUrlSet`<sup>Required</sup> <a name="channelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet"></a>

```java
public java.lang.Boolean|IResolvable getChannelUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `tenantIdSet`<sup>Required</sup> <a name="tenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet"></a>

```java
public java.lang.Boolean|IResolvable getTenantIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigMicrosoftTeams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---


### NotificationDestinationConfigPagerdutyOutputReference <a name="NotificationDestinationConfigPagerdutyOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigPagerdutyOutputReference;

new NotificationDestinationConfigPagerdutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey">resetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet">resetIntegrationKeySet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrationKey` <a name="resetIntegrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey"></a>

```java
public void resetIntegrationKey()
```

##### `resetIntegrationKeySet` <a name="resetIntegrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet"></a>

```java
public void resetIntegrationKeySet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput">integrationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput">integrationKeySetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey">integrationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet">integrationKeySet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput"></a>

```java
public java.lang.String getIntegrationKeyInput();
```

- *Type:* java.lang.String

---

##### `integrationKeySetInput`<sup>Optional</sup> <a name="integrationKeySetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput"></a>

```java
public java.lang.Boolean|IResolvable getIntegrationKeySetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey"></a>

```java
public java.lang.String getIntegrationKey();
```

- *Type:* java.lang.String

---

##### `integrationKeySet`<sup>Required</sup> <a name="integrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet"></a>

```java
public java.lang.Boolean|IResolvable getIntegrationKeySet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigPagerduty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---


### NotificationDestinationConfigSlackOutputReference <a name="NotificationDestinationConfigSlackOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationConfigSlackOutputReference;

new NotificationDestinationConfigSlackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet">resetChannelIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet">resetOauthTokenSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet">resetUrlSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId"></a>

```java
public void resetChannelId()
```

##### `resetChannelIdSet` <a name="resetChannelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet"></a>

```java
public void resetChannelIdSet()
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken"></a>

```java
public void resetOauthToken()
```

##### `resetOauthTokenSet` <a name="resetOauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet"></a>

```java
public void resetOauthTokenSet()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlSet` <a name="resetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet"></a>

```java
public void resetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput">channelIdSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput">oauthTokenSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput">urlSetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet">channelIdSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet">oauthTokenSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet">urlSet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `channelIdSetInput`<sup>Optional</sup> <a name="channelIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput"></a>

```java
public java.lang.Boolean|IResolvable getChannelIdSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput"></a>

```java
public java.lang.String getOauthTokenInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenSetInput`<sup>Optional</sup> <a name="oauthTokenSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput"></a>

```java
public java.lang.Boolean|IResolvable getOauthTokenSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlSetInput`<sup>Optional</sup> <a name="urlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput"></a>

```java
public java.lang.Boolean|IResolvable getUrlSetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `channelIdSet`<sup>Required</sup> <a name="channelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet"></a>

```java
public java.lang.Boolean|IResolvable getChannelIdSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

---

##### `oauthTokenSet`<sup>Required</sup> <a name="oauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet"></a>

```java
public java.lang.Boolean|IResolvable getOauthTokenSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlSet`<sup>Required</sup> <a name="urlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet"></a>

```java
public java.lang.Boolean|IResolvable getUrlSet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue"></a>

```java
public NotificationDestinationConfigSlack getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---


### NotificationDestinationProviderConfigOutputReference <a name="NotificationDestinationProviderConfigOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.notification_destination.NotificationDestinationProviderConfigOutputReference;

new NotificationDestinationProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue"></a>

```java
public NotificationDestinationProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---



