# `mount` Submodule <a name="`mount` Submodule" id="@cdktn/provider-databricks.mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mount <a name="Mount" id="@cdktn/provider-databricks.mount.Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount databricks_mount}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.Mount.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.Mount;

Mount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .abfs(MountAbfs)
//  .adl(MountAdl)
//  .clusterId(java.lang.String)
//  .encryptionType(java.lang.String)
//  .extraConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .gs(MountGs)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .providerConfig(MountProviderConfig)
//  .resourceId(java.lang.String)
//  .s3(MountS3)
//  .timeouts(MountTimeouts)
//  .uri(java.lang.String)
//  .wasb(MountWasb)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.abfs">abfs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | abfs block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.adl">adl</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a></code> | adl block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#cluster_id Mount#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#encryption_type Mount#encryption_type}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.extraConfigs">extraConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#extra_configs Mount#extra_configs}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.gs">gs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a></code> | gs block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#name Mount#name}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#resource_id Mount#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a></code> | s3 block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#uri Mount#uri}. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.Initializer.parameter.wasb">wasb</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a></code> | wasb block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `abfs`<sup>Optional</sup> <a name="abfs" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.abfs"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a>

abfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#abfs Mount#abfs}

---

##### `adl`<sup>Optional</sup> <a name="adl" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.adl"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a>

adl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#adl Mount#adl}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#cluster_id Mount#cluster_id}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.encryptionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#encryption_type Mount#encryption_type}.

---

##### `extraConfigs`<sup>Optional</sup> <a name="extraConfigs" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.extraConfigs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#extra_configs Mount#extra_configs}.

---

##### `gs`<sup>Optional</sup> <a name="gs" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.gs"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a>

gs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#gs Mount#gs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#name Mount#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#provider_config Mount#provider_config}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#resource_id Mount#resource_id}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#s3 Mount#s3}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#timeouts Mount#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#uri Mount#uri}.

---

##### `wasb`<sup>Optional</sup> <a name="wasb" id="@cdktn/provider-databricks.mount.Mount.Initializer.parameter.wasb"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a>

wasb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#wasb Mount#wasb}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putAbfs">putAbfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putAdl">putAdl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putGs">putGs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.putWasb">putWasb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetAbfs">resetAbfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetAdl">resetAdl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetExtraConfigs">resetExtraConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetGs">resetGs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.resetWasb">resetWasb</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.Mount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.mount.Mount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mount.Mount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.mount.Mount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mount.Mount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.mount.Mount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.mount.Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.mount.Mount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.mount.Mount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.mount.Mount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.mount.Mount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.mount.Mount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mount.Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.Mount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.Mount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.Mount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.Mount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.Mount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.Mount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.mount.Mount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.mount.Mount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mount.Mount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.Mount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.mount.Mount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.mount.Mount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mount.Mount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mount.Mount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.mount.Mount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbfs` <a name="putAbfs" id="@cdktn/provider-databricks.mount.Mount.putAbfs"></a>

```java
public void putAbfs(MountAbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putAbfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `putAdl` <a name="putAdl" id="@cdktn/provider-databricks.mount.Mount.putAdl"></a>

```java
public void putAdl(MountAdl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putAdl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `putGs` <a name="putGs" id="@cdktn/provider-databricks.mount.Mount.putGs"></a>

```java
public void putGs(MountGs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putGs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.mount.Mount.putProviderConfig"></a>

```java
public void putProviderConfig(MountProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-databricks.mount.Mount.putS3"></a>

```java
public void putS3(MountS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-databricks.mount.Mount.putTimeouts"></a>

```java
public void putTimeouts(MountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---

##### `putWasb` <a name="putWasb" id="@cdktn/provider-databricks.mount.Mount.putWasb"></a>

```java
public void putWasb(MountWasb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mount.Mount.putWasb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `resetAbfs` <a name="resetAbfs" id="@cdktn/provider-databricks.mount.Mount.resetAbfs"></a>

```java
public void resetAbfs()
```

##### `resetAdl` <a name="resetAdl" id="@cdktn/provider-databricks.mount.Mount.resetAdl"></a>

```java
public void resetAdl()
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-databricks.mount.Mount.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-databricks.mount.Mount.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetExtraConfigs` <a name="resetExtraConfigs" id="@cdktn/provider-databricks.mount.Mount.resetExtraConfigs"></a>

```java
public void resetExtraConfigs()
```

##### `resetGs` <a name="resetGs" id="@cdktn/provider-databricks.mount.Mount.resetGs"></a>

```java
public void resetGs()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.mount.Mount.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.mount.Mount.resetName"></a>

```java
public void resetName()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.mount.Mount.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-databricks.mount.Mount.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-databricks.mount.Mount.resetS3"></a>

```java
public void resetS3()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-databricks.mount.Mount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-databricks.mount.Mount.resetUri"></a>

```java
public void resetUri()
```

##### `resetWasb` <a name="resetWasb" id="@cdktn/provider-databricks.mount.Mount.resetWasb"></a>

```java
public void resetWasb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Mount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.mount.Mount.isConstruct"></a>

```java
import io.cdktn.providers.databricks.mount.Mount;

Mount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mount.Mount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.mount.Mount.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.mount.Mount;

Mount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mount.Mount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.mount.Mount.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.mount.Mount;

Mount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mount.Mount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.mount.Mount.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.mount.Mount;

Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Mount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mount.Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.mount.Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.mount.Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mount.Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.abfs">abfs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.adl">adl</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.gs">gs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference">MountProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.wasb">wasb</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.abfsInput">abfsInput</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.adlInput">adlInput</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.extraConfigsInput">extraConfigsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.gsInput">gsInput</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.s3Input">s3Input</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.wasbInput">wasbInput</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.extraConfigs">extraConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.mount.Mount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.mount.Mount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.Mount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.mount.Mount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.mount.Mount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.mount.Mount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.mount.Mount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mount.Mount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mount.Mount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mount.Mount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mount.Mount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mount.Mount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mount.Mount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mount.Mount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `abfs`<sup>Required</sup> <a name="abfs" id="@cdktn/provider-databricks.mount.Mount.property.abfs"></a>

```java
public MountAbfsOutputReference getAbfs();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a>

---

##### `adl`<sup>Required</sup> <a name="adl" id="@cdktn/provider-databricks.mount.Mount.property.adl"></a>

```java
public MountAdlOutputReference getAdl();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a>

---

##### `gs`<sup>Required</sup> <a name="gs" id="@cdktn/provider-databricks.mount.Mount.property.gs"></a>

```java
public MountGsOutputReference getGs();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mount.Mount.property.providerConfig"></a>

```java
public MountProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference">MountProviderConfigOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-databricks.mount.Mount.property.s3"></a>

```java
public MountS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.mount.Mount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-databricks.mount.Mount.property.timeouts"></a>

```java
public MountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a>

---

##### `wasb`<sup>Required</sup> <a name="wasb" id="@cdktn/provider-databricks.mount.Mount.property.wasb"></a>

```java
public MountWasbOutputReference getWasb();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a>

---

##### `abfsInput`<sup>Optional</sup> <a name="abfsInput" id="@cdktn/provider-databricks.mount.Mount.property.abfsInput"></a>

```java
public MountAbfs getAbfsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `adlInput`<sup>Optional</sup> <a name="adlInput" id="@cdktn/provider-databricks.mount.Mount.property.adlInput"></a>

```java
public MountAdl getAdlInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-databricks.mount.Mount.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-databricks.mount.Mount.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `extraConfigsInput`<sup>Optional</sup> <a name="extraConfigsInput" id="@cdktn/provider-databricks.mount.Mount.property.extraConfigsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `gsInput`<sup>Optional</sup> <a name="gsInput" id="@cdktn/provider-databricks.mount.Mount.property.gsInput"></a>

```java
public MountGs getGsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.mount.Mount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.mount.Mount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.mount.Mount.property.providerConfigInput"></a>

```java
public MountProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-databricks.mount.Mount.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-databricks.mount.Mount.property.s3Input"></a>

```java
public MountS3 getS3Input();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-databricks.mount.Mount.property.timeoutsInput"></a>

```java
public IResolvable|MountTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-databricks.mount.Mount.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `wasbInput`<sup>Optional</sup> <a name="wasbInput" id="@cdktn/provider-databricks.mount.Mount.property.wasbInput"></a>

```java
public MountWasb getWasbInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-databricks.mount.Mount.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-databricks.mount.Mount.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `extraConfigs`<sup>Required</sup> <a name="extraConfigs" id="@cdktn/provider-databricks.mount.Mount.property.extraConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mount.Mount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.mount.Mount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-databricks.mount.Mount.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.mount.Mount.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.Mount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.mount.Mount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MountAbfs <a name="MountAbfs" id="@cdktn/provider-databricks.mount.MountAbfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountAbfs.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountAbfs;

MountAbfs.builder()
    .clientId(java.lang.String)
    .clientSecretKey(java.lang.String)
    .clientSecretScope(java.lang.String)
    .initializeFileSystem(java.lang.Boolean|IResolvable)
//  .containerName(java.lang.String)
//  .directory(java.lang.String)
//  .storageAccountName(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.initializeFileSystem">initializeFileSystem</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#initialize_file_system Mount#initialize_file_system}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_account_name Mount#storage_account_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfs.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.mount.MountAbfs.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_id Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.mount.MountAbfs.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.mount.MountAbfs.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktn/provider-databricks.mount.MountAbfs.property.initializeFileSystem"></a>

```java
public java.lang.Boolean|IResolvable getInitializeFileSystem();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#initialize_file_system Mount#initialize_file_system}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-databricks.mount.MountAbfs.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#container_name Mount#container_name}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountAbfs.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.mount.MountAbfs.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-databricks.mount.MountAbfs.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountAdl <a name="MountAdl" id="@cdktn/provider-databricks.mount.MountAdl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountAdl.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountAdl;

MountAdl.builder()
    .clientId(java.lang.String)
    .clientSecretKey(java.lang.String)
    .clientSecretScope(java.lang.String)
//  .directory(java.lang.String)
//  .sparkConfPrefix(java.lang.String)
//  .storageResourceName(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.storageResourceName">storageResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_resource_name Mount#storage_resource_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdl.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.mount.MountAdl.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_id Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.mount.MountAdl.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.mount.MountAdl.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountAdl.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}.

---

##### `sparkConfPrefix`<sup>Optional</sup> <a name="sparkConfPrefix" id="@cdktn/provider-databricks.mount.MountAdl.property.sparkConfPrefix"></a>

```java
public java.lang.String getSparkConfPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}.

---

##### `storageResourceName`<sup>Optional</sup> <a name="storageResourceName" id="@cdktn/provider-databricks.mount.MountAdl.property.storageResourceName"></a>

```java
public java.lang.String getStorageResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_resource_name Mount#storage_resource_name}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-databricks.mount.MountAdl.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountConfig <a name="MountConfig" id="@cdktn/provider-databricks.mount.MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountConfig;

MountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .abfs(MountAbfs)
//  .adl(MountAdl)
//  .clusterId(java.lang.String)
//  .encryptionType(java.lang.String)
//  .extraConfigs(java.util.Map<java.lang.String, java.lang.String>)
//  .gs(MountGs)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .providerConfig(MountProviderConfig)
//  .resourceId(java.lang.String)
//  .s3(MountS3)
//  .timeouts(MountTimeouts)
//  .uri(java.lang.String)
//  .wasb(MountWasb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.abfs">abfs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | abfs block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.adl">adl</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a></code> | adl block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#cluster_id Mount#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#encryption_type Mount#encryption_type}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.extraConfigs">extraConfigs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#extra_configs Mount#extra_configs}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.gs">gs</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a></code> | gs block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#name Mount#name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#resource_id Mount#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a></code> | s3 block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#uri Mount#uri}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountConfig.property.wasb">wasb</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a></code> | wasb block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mount.MountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mount.MountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.mount.MountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.mount.MountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mount.MountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mount.MountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mount.MountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `abfs`<sup>Optional</sup> <a name="abfs" id="@cdktn/provider-databricks.mount.MountConfig.property.abfs"></a>

```java
public MountAbfs getAbfs();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a>

abfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#abfs Mount#abfs}

---

##### `adl`<sup>Optional</sup> <a name="adl" id="@cdktn/provider-databricks.mount.MountConfig.property.adl"></a>

```java
public MountAdl getAdl();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a>

adl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#adl Mount#adl}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-databricks.mount.MountConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#cluster_id Mount#cluster_id}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-databricks.mount.MountConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#encryption_type Mount#encryption_type}.

---

##### `extraConfigs`<sup>Optional</sup> <a name="extraConfigs" id="@cdktn/provider-databricks.mount.MountConfig.property.extraConfigs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#extra_configs Mount#extra_configs}.

---

##### `gs`<sup>Optional</sup> <a name="gs" id="@cdktn/provider-databricks.mount.MountConfig.property.gs"></a>

```java
public MountGs getGs();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a>

gs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#gs Mount#gs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mount.MountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.mount.MountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#name Mount#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.mount.MountConfig.property.providerConfig"></a>

```java
public MountProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#provider_config Mount#provider_config}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-databricks.mount.MountConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#resource_id Mount#resource_id}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-databricks.mount.MountConfig.property.s3"></a>

```java
public MountS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#s3 Mount#s3}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.mount.MountConfig.property.timeouts"></a>

```java
public MountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#timeouts Mount#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-databricks.mount.MountConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#uri Mount#uri}.

---

##### `wasb`<sup>Optional</sup> <a name="wasb" id="@cdktn/provider-databricks.mount.MountConfig.property.wasb"></a>

```java
public MountWasb getWasb();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a>

wasb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#wasb Mount#wasb}

---

### MountGs <a name="MountGs" id="@cdktn/provider-databricks.mount.MountGs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountGs.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountGs;

MountGs.builder()
    .bucketName(java.lang.String)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountGs.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountGs.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#service_account Mount#service_account}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-databricks.mount.MountGs.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-databricks.mount.MountGs.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#service_account Mount#service_account}.

---

### MountProviderConfig <a name="MountProviderConfig" id="@cdktn/provider-databricks.mount.MountProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountProviderConfig;

MountProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#workspace_id Mount#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.mount.MountProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#workspace_id Mount#workspace_id}.

---

### MountS3 <a name="MountS3" id="@cdktn/provider-databricks.mount.MountS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountS3.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountS3;

MountS3.builder()
    .bucketName(java.lang.String)
//  .instanceProfile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3.property.instanceProfile">instanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#instance_profile Mount#instance_profile}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-databricks.mount.MountS3.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `instanceProfile`<sup>Optional</sup> <a name="instanceProfile" id="@cdktn/provider-databricks.mount.MountS3.property.instanceProfile"></a>

```java
public java.lang.String getInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#instance_profile Mount#instance_profile}.

---

### MountTimeouts <a name="MountTimeouts" id="@cdktn/provider-databricks.mount.MountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountTimeouts.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountTimeouts;

MountTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#default Mount#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-databricks.mount.MountTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#default Mount#default}.

---

### MountWasb <a name="MountWasb" id="@cdktn/provider-databricks.mount.MountWasb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mount.MountWasb.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountWasb;

MountWasb.builder()
    .authType(java.lang.String)
    .tokenSecretKey(java.lang.String)
    .tokenSecretScope(java.lang.String)
//  .containerName(java.lang.String)
//  .directory(java.lang.String)
//  .storageAccountName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#auth_type Mount#auth_type}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.tokenSecretKey">tokenSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#token_secret_key Mount#token_secret_key}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.tokenSecretScope">tokenSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#token_secret_scope Mount#token_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasb.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_account_name Mount#storage_account_name}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-databricks.mount.MountWasb.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#auth_type Mount#auth_type}.

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktn/provider-databricks.mount.MountWasb.property.tokenSecretKey"></a>

```java
public java.lang.String getTokenSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#token_secret_key Mount#token_secret_key}.

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktn/provider-databricks.mount.MountWasb.property.tokenSecretScope"></a>

```java
public java.lang.String getTokenSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#token_secret_scope Mount#token_secret_scope}.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-databricks.mount.MountWasb.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#container_name Mount#container_name}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountWasb.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#directory Mount#directory}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.mount.MountWasb.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### MountAbfsOutputReference <a name="MountAbfsOutputReference" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountAbfsOutputReference;

new MountAbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName"></a>

```java
public void resetStorageAccountName()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput">initializeFileSystemInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem">initializeFileSystem</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput"></a>

```java
public java.lang.String getClientSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput"></a>

```java
public java.lang.String getClientSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `initializeFileSystemInput`<sup>Optional</sup> <a name="initializeFileSystemInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput"></a>

```java
public java.lang.Boolean|IResolvable getInitializeFileSystemInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem"></a>

```java
public java.lang.Boolean|IResolvable getInitializeFileSystem();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountAbfsOutputReference.property.internalValue"></a>

```java
public MountAbfs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAbfs">MountAbfs</a>

---


### MountAdlOutputReference <a name="MountAdlOutputReference" id="@cdktn/provider-databricks.mount.MountAdlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountAdlOutputReference;

new MountAdlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix">resetSparkConfPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName">resetStorageResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetSparkConfPrefix` <a name="resetSparkConfPrefix" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix"></a>

```java
public void resetSparkConfPrefix()
```

##### `resetStorageResourceName` <a name="resetStorageResourceName" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName"></a>

```java
public void resetStorageResourceName()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput">sparkConfPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput">storageResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName">storageResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountAdlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput"></a>

```java
public java.lang.String getClientSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput"></a>

```java
public java.lang.String getClientSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `sparkConfPrefixInput`<sup>Optional</sup> <a name="sparkConfPrefixInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput"></a>

```java
public java.lang.String getSparkConfPrefixInput();
```

- *Type:* java.lang.String

---

##### `storageResourceNameInput`<sup>Optional</sup> <a name="storageResourceNameInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput"></a>

```java
public java.lang.String getStorageResourceNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `sparkConfPrefix`<sup>Required</sup> <a name="sparkConfPrefix" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix"></a>

```java
public java.lang.String getSparkConfPrefix();
```

- *Type:* java.lang.String

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName"></a>

```java
public java.lang.String getStorageResourceName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountAdlOutputReference.property.internalValue"></a>

```java
public MountAdl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountAdl">MountAdl</a>

---


### MountGsOutputReference <a name="MountGsOutputReference" id="@cdktn/provider-databricks.mount.MountGsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountGsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountGsOutputReference;

new MountGsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountGsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountGsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountGsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountGsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-databricks.mount.MountGsOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountGsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountGsOutputReference.property.internalValue"></a>

```java
public MountGs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountGs">MountGs</a>

---


### MountProviderConfigOutputReference <a name="MountProviderConfigOutputReference" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountProviderConfigOutputReference;

new MountProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountProviderConfigOutputReference.property.internalValue"></a>

```java
public MountProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountProviderConfig">MountProviderConfig</a>

---


### MountS3OutputReference <a name="MountS3OutputReference" id="@cdktn/provider-databricks.mount.MountS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountS3OutputReference;

new MountS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile">resetInstanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceProfile` <a name="resetInstanceProfile" id="@cdktn/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile"></a>

```java
public void resetInstanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput">instanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.instanceProfile">instanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileInput`<sup>Optional</sup> <a name="instanceProfileInput" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput"></a>

```java
public java.lang.String getInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.instanceProfile"></a>

```java
public java.lang.String getInstanceProfile();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountS3OutputReference.property.internalValue"></a>

```java
public MountS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountS3">MountS3</a>

---


### MountTimeoutsOutputReference <a name="MountTimeoutsOutputReference" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountTimeoutsOutputReference;

new MountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MountTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---


### MountWasbOutputReference <a name="MountWasbOutputReference" id="@cdktn/provider-databricks.mount.MountWasbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.mount.MountWasbOutputReference;

new MountWasbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName"></a>

```java
public void resetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput">tokenSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput">tokenSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey">tokenSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope">tokenSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mount.MountWasbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tokenSecretKeyInput`<sup>Optional</sup> <a name="tokenSecretKeyInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput"></a>

```java
public java.lang.String getTokenSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `tokenSecretScopeInput`<sup>Optional</sup> <a name="tokenSecretScopeInput" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput"></a>

```java
public java.lang.String getTokenSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey"></a>

```java
public java.lang.String getTokenSecretKey();
```

- *Type:* java.lang.String

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope"></a>

```java
public java.lang.String getTokenSecretScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.mount.MountWasbOutputReference.property.internalValue"></a>

```java
public MountWasb getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.mount.MountWasb">MountWasb</a>

---



