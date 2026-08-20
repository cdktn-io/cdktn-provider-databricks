# `rfaAccessRequestDestinations` Submodule <a name="`rfaAccessRequestDestinations` Submodule" id="@cdktn/provider-databricks.rfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RfaAccessRequestDestinations <a name="RfaAccessRequestDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinations;

RfaAccessRequestDestinations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .securable(RfaAccessRequestDestinationsSecurable)
//  .destinations(IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations>)
//  .providerConfig(RfaAccessRequestDestinationsProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.securable">securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.securable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.destinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable">putSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig"></a>

```java
public void putProviderConfig(RfaAccessRequestDestinationsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `putSecurable` <a name="putSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable"></a>

```java
public void putSecurable(RfaAccessRequestDestinationsSecurable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinations;

RfaAccessRequestDestinations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinations;

RfaAccessRequestDestinations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinations;

RfaAccessRequestDestinations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinations;

RfaAccessRequestDestinations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RfaAccessRequestDestinations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RfaAccessRequestDestinations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden">areAnyDestinationsHidden</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable">destinationSourceSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable">securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput">securableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `areAnyDestinationsHidden`<sup>Required</sup> <a name="areAnyDestinationsHidden" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```java
public IResolvable getAreAnyDestinationsHidden();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations"></a>

```java
public RfaAccessRequestDestinationsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a>

---

##### `destinationSourceSecurable`<sup>Required</sup> <a name="destinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable"></a>

```java
public RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference getDestinationSourceSecurable();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig"></a>

```java
public RfaAccessRequestDestinationsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable"></a>

```java
public RfaAccessRequestDestinationsSecurableOutputReference getSecurable();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput"></a>

```java
public IResolvable|RfaAccessRequestDestinationsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `securableInput`<sup>Optional</sup> <a name="securableInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput"></a>

```java
public IResolvable|RfaAccessRequestDestinationsSecurable getSecurableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RfaAccessRequestDestinationsConfig <a name="RfaAccessRequestDestinationsConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsConfig;

RfaAccessRequestDestinationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .securable(RfaAccessRequestDestinationsSecurable)
//  .destinations(IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations>)
//  .providerConfig(RfaAccessRequestDestinationsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable">securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `securable`<sup>Required</sup> <a name="securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable"></a>

```java
public RfaAccessRequestDestinationsSecurable getSecurable();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations"></a>

```java
public IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig"></a>

```java
public RfaAccessRequestDestinationsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}.

---

### RfaAccessRequestDestinationsDestinations <a name="RfaAccessRequestDestinationsDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsDestinations;

RfaAccessRequestDestinationsDestinations.builder()
//  .destinationId(java.lang.String)
//  .destinationType(java.lang.String)
//  .specialDestination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination">specialDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}.

---

##### `specialDestination`<sup>Optional</sup> <a name="specialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```java
public java.lang.String getSpecialDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}.

---

### RfaAccessRequestDestinationsDestinationSourceSecurable <a name="RfaAccessRequestDestinationsDestinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsDestinationSourceSecurable;

RfaAccessRequestDestinationsDestinationSourceSecurable.builder()
//  .fullName(java.lang.String)
//  .providerShare(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare">providerShare</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `providerShare`<sup>Optional</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare"></a>

```java
public java.lang.String getProviderShare();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

### RfaAccessRequestDestinationsProviderConfig <a name="RfaAccessRequestDestinationsProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsProviderConfig;

RfaAccessRequestDestinationsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}.

---

### RfaAccessRequestDestinationsSecurable <a name="RfaAccessRequestDestinationsSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsSecurable;

RfaAccessRequestDestinationsSecurable.builder()
//  .fullName(java.lang.String)
//  .providerShare(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare">providerShare</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `providerShare`<sup>Optional</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```java
public java.lang.String getProviderShare();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RfaAccessRequestDestinationsDestinationsList <a name="RfaAccessRequestDestinationsDestinationsList" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsDestinationsList;

new RfaAccessRequestDestinationsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get"></a>

```java
public RfaAccessRequestDestinationsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RfaAccessRequestDestinationsDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>>

---


### RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference <a name="RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference;

new RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare">resetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetProviderShare` <a name="resetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare"></a>

```java
public void resetProviderShare()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput">providerShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare">providerShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `providerShareInput`<sup>Optional</sup> <a name="providerShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput"></a>

```java
public java.lang.String getProviderShareInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `providerShare`<sup>Required</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare"></a>

```java
public java.lang.String getProviderShare();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue"></a>

```java
public RfaAccessRequestDestinationsDestinationSourceSecurable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a>

---


### RfaAccessRequestDestinationsDestinationsOutputReference <a name="RfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsDestinationsOutputReference;

new RfaAccessRequestDestinationsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">resetSpecialDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```java
public void resetDestinationId()
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetSpecialDestination` <a name="resetSpecialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```java
public void resetSpecialDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">specialDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">specialDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```java
public java.lang.String getDestinationIdInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `specialDestinationInput`<sup>Optional</sup> <a name="specialDestinationInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```java
public java.lang.String getSpecialDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `specialDestination`<sup>Required</sup> <a name="specialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```java
public java.lang.String getSpecialDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|RfaAccessRequestDestinationsDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>

---


### RfaAccessRequestDestinationsProviderConfigOutputReference <a name="RfaAccessRequestDestinationsProviderConfigOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsProviderConfigOutputReference;

new RfaAccessRequestDestinationsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|RfaAccessRequestDestinationsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---


### RfaAccessRequestDestinationsSecurableOutputReference <a name="RfaAccessRequestDestinationsSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.rfa_access_request_destinations.RfaAccessRequestDestinationsSecurableOutputReference;

new RfaAccessRequestDestinationsSecurableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">resetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetProviderShare` <a name="resetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```java
public void resetProviderShare()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">providerShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">providerShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `providerShareInput`<sup>Optional</sup> <a name="providerShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```java
public java.lang.String getProviderShareInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `providerShare`<sup>Required</sup> <a name="providerShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```java
public java.lang.String getProviderShare();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```java
public IResolvable|RfaAccessRequestDestinationsSecurable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---



