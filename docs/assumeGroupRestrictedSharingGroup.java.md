# `assumeGroupRestrictedSharingGroup` Submodule <a name="`assumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssumeGroupRestrictedSharingGroup <a name="AssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroup;

AssumeGroupRestrictedSharingGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restrictedSharingGroupId(java.lang.String)
//  .providerConfig(AssumeGroupRestrictedSharingGroupProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.restrictedSharingGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```java
public void putProviderConfig(AssumeGroupRestrictedSharingGroupProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroup;

AssumeGroupRestrictedSharingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroup;

AssumeGroupRestrictedSharingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroup;

AssumeGroupRestrictedSharingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroup;

AssumeGroupRestrictedSharingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AssumeGroupRestrictedSharingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AssumeGroupRestrictedSharingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName">groupDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput">restrictedSharingGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```java
public java.lang.String getGroupDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```java
public AssumeGroupRestrictedSharingGroupProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```java
public IResolvable|AssumeGroupRestrictedSharingGroupProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `restrictedSharingGroupIdInput`<sup>Optional</sup> <a name="restrictedSharingGroupIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput"></a>

```java
public java.lang.String getRestrictedSharingGroupIdInput();
```

- *Type:* java.lang.String

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```java
public java.lang.String getRestrictedSharingGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AssumeGroupRestrictedSharingGroupConfig <a name="AssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroupConfig;

AssumeGroupRestrictedSharingGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restrictedSharingGroupId(java.lang.String)
//  .providerConfig(AssumeGroupRestrictedSharingGroupProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId"></a>

```java
public java.lang.String getRestrictedSharingGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```java
public AssumeGroupRestrictedSharingGroupProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}.

---

### AssumeGroupRestrictedSharingGroupProviderConfig <a name="AssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroupProviderConfig;

AssumeGroupRestrictedSharingGroupProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="AssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.assume_group_restricted_sharing_group.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference;

new AssumeGroupRestrictedSharingGroupProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AssumeGroupRestrictedSharingGroupProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---



