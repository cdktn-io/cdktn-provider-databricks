# `artifactAllowlist` Submodule <a name="`artifactAllowlist` Submodule" id="@cdktn/provider-databricks.artifactAllowlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactAllowlist <a name="ArtifactAllowlist" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist databricks_artifact_allowlist}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlist;

ArtifactAllowlist.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactMatcher(IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher>)
    .artifactType(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .providerConfig(ArtifactAllowlistProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.artifactMatcher">artifactMatcher</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>></code> | artifact_matcher block. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.artifactType">artifactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactMatcher`<sup>Required</sup> <a name="artifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.artifactMatcher"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>>

artifact_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_matcher ArtifactAllowlist#artifact_matcher}

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.artifactType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#provider_config ArtifactAllowlist#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher">putArtifactMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactMatcher` <a name="putArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher"></a>

```java
public void putArtifactMatcher(IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig"></a>

```java
public void putProviderConfig(ArtifactAllowlistProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlist;

ArtifactAllowlist.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlist;

ArtifactAllowlist.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlist;

ArtifactAllowlist.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlist;

ArtifactAllowlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArtifactAllowlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArtifactAllowlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArtifactAllowlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactAllowlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher">artifactMatcher</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput">artifactMatcherInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput">artifactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType">artifactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactMatcher`<sup>Required</sup> <a name="artifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher"></a>

```java
public ArtifactAllowlistArtifactMatcherList getArtifactMatcher();
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig"></a>

```java
public ArtifactAllowlistProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a>

---

##### `artifactMatcherInput`<sup>Optional</sup> <a name="artifactMatcherInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput"></a>

```java
public IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher> getArtifactMatcherInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>>

---

##### `artifactTypeInput`<sup>Optional</sup> <a name="artifactTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput"></a>

```java
public java.lang.String getArtifactTypeInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput"></a>

```java
public ArtifactAllowlistProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType"></a>

```java
public java.lang.String getArtifactType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactAllowlistArtifactMatcher <a name="ArtifactAllowlistArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistArtifactMatcher;

ArtifactAllowlistArtifactMatcher.builder()
    .artifact(java.lang.String)
    .matchType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact">artifact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}. |

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact"></a>

```java
public java.lang.String getArtifact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}.

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}.

---

### ArtifactAllowlistConfig <a name="ArtifactAllowlistConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistConfig;

ArtifactAllowlistConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactMatcher(IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher>)
    .artifactType(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .providerConfig(ArtifactAllowlistProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher">artifactMatcher</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>></code> | artifact_matcher block. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType">artifactType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactMatcher`<sup>Required</sup> <a name="artifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher"></a>

```java
public IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher> getArtifactMatcher();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>>

artifact_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_matcher ArtifactAllowlist#artifact_matcher}

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType"></a>

```java
public java.lang.String getArtifactType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig"></a>

```java
public ArtifactAllowlistProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#provider_config ArtifactAllowlist#provider_config}

---

### ArtifactAllowlistProviderConfig <a name="ArtifactAllowlistProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistProviderConfig;

ArtifactAllowlistProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactAllowlistArtifactMatcherList <a name="ArtifactAllowlistArtifactMatcherList" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistArtifactMatcherList;

new ArtifactAllowlistArtifactMatcherList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get"></a>

```java
public ArtifactAllowlistArtifactMatcherOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ArtifactAllowlistArtifactMatcher> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>>

---


### ArtifactAllowlistArtifactMatcherOutputReference <a name="ArtifactAllowlistArtifactMatcherOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistArtifactMatcherOutputReference;

new ArtifactAllowlistArtifactMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput">artifactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact">artifact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactInput`<sup>Optional</sup> <a name="artifactInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput"></a>

```java
public java.lang.String getArtifactInput();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact"></a>

```java
public java.lang.String getArtifact();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue"></a>

```java
public IResolvable|ArtifactAllowlistArtifactMatcher getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>

---


### ArtifactAllowlistProviderConfigOutputReference <a name="ArtifactAllowlistProviderConfigOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.artifact_allowlist.ArtifactAllowlistProviderConfigOutputReference;

new ArtifactAllowlistProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue"></a>

```java
public ArtifactAllowlistProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---



