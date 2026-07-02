# `userInstanceProfile` Submodule <a name="`userInstanceProfile` Submodule" id="@cdktn/provider-databricks.userInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserInstanceProfile <a name="UserInstanceProfile" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile databricks_user_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfile;

UserInstanceProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileId(java.lang.String)
    .userId(java.lang.String)
//  .api(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(UserInstanceProfileProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.instanceProfileId">instanceProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#user_id UserInstanceProfile#user_id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#id UserInstanceProfile#id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileId`<sup>Required</sup> <a name="instanceProfileId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.instanceProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#user_id UserInstanceProfile#user_id}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.api"></a>

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#api UserInstanceProfile#api}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#id UserInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#provider_config UserInstanceProfile#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.putProviderConfig"></a>

```java
public void putProviderConfig(UserInstanceProfileProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a>

---

##### `resetApi` <a name="resetApi" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetApi"></a>

```java
public void resetApi()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetId"></a>

```java
public void resetId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UserInstanceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isConstruct"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfile;

UserInstanceProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfile;

UserInstanceProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfile;

UserInstanceProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfile;

UserInstanceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserInstanceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a UserInstanceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserInstanceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserInstanceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the UserInstanceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference">UserInstanceProfileProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.instanceProfileIdInput">instanceProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.instanceProfileId">instanceProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.providerConfig"></a>

```java
public UserInstanceProfileProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference">UserInstanceProfileProviderConfigOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileIdInput`<sup>Optional</sup> <a name="instanceProfileIdInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.instanceProfileIdInput"></a>

```java
public java.lang.String getInstanceProfileIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.providerConfigInput"></a>

```java
public UserInstanceProfileProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileId`<sup>Required</sup> <a name="instanceProfileId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.instanceProfileId"></a>

```java
public java.lang.String getInstanceProfileId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserInstanceProfileConfig <a name="UserInstanceProfileConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfileConfig;

UserInstanceProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileId(java.lang.String)
    .userId(java.lang.String)
//  .api(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(UserInstanceProfileProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.instanceProfileId">instanceProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#user_id UserInstanceProfile#user_id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#id UserInstanceProfile#id}. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileId`<sup>Required</sup> <a name="instanceProfileId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.instanceProfileId"></a>

```java
public java.lang.String getInstanceProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#user_id UserInstanceProfile#user_id}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#api UserInstanceProfile#api}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#id UserInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileConfig.property.providerConfig"></a>

```java
public UserInstanceProfileProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#provider_config UserInstanceProfile#provider_config}

---

### UserInstanceProfileProviderConfig <a name="UserInstanceProfileProviderConfig" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfileProviderConfig;

UserInstanceProfileProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#workspace_id UserInstanceProfile#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/user_instance_profile#workspace_id UserInstanceProfile#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserInstanceProfileProviderConfigOutputReference <a name="UserInstanceProfileProviderConfigOutputReference" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.user_instance_profile.UserInstanceProfileProviderConfigOutputReference;

new UserInstanceProfileProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfigOutputReference.property.internalValue"></a>

```java
public UserInstanceProfileProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.userInstanceProfile.UserInstanceProfileProviderConfig">UserInstanceProfileProviderConfig</a>

---



