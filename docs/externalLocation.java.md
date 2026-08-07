# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktn/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktn/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocation;

ExternalLocation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentialName(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .comment(java.lang.String)
//  .effectiveFileEventQueue(ExternalLocationEffectiveFileEventQueue)
//  .enableFileEvents(java.lang.Boolean|IResolvable)
//  .encryptionDetails(ExternalLocationEncryptionDetails)
//  .fallback(java.lang.Boolean|IResolvable)
//  .fileEventQueue(ExternalLocationFileEventQueue)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .isolationMode(java.lang.String)
//  .metastoreId(java.lang.String)
//  .owner(java.lang.String)
//  .providerConfig(ExternalLocationProviderConfig)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .skipValidation(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.effectiveFileEventQueue">effectiveFileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a></code> | effective_file_event_queue block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.enableFileEvents">enableFileEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fallback">fallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#fallback ExternalLocation#fallback}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fileEventQueue">fileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `effectiveFileEventQueue`<sup>Optional</sup> <a name="effectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.effectiveFileEventQueue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a>

effective_file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#effective_file_event_queue ExternalLocation#effective_file_event_queue}

---

##### `enableFileEvents`<sup>Optional</sup> <a name="enableFileEvents" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.enableFileEvents"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}.

---

##### `encryptionDetails`<sup>Optional</sup> <a name="encryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.encryptionDetails"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fallback"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#fallback ExternalLocation#fallback}.

---

##### `fileEventQueue`<sup>Optional</sup> <a name="fileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fileEventQueue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.isolationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provider_config ExternalLocation#provider_config}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.putEffectiveFileEventQueue">putEffectiveFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails">putEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue">putFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEffectiveFileEventQueue">resetEffectiveFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents">resetEnableFileEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails">resetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetFallback">resetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue">resetFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">resetSkipValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEffectiveFileEventQueue` <a name="putEffectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putEffectiveFileEventQueue"></a>

```java
public void putEffectiveFileEventQueue(ExternalLocationEffectiveFileEventQueue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putEffectiveFileEventQueue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a>

---

##### `putEncryptionDetails` <a name="putEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails"></a>

```java
public void putEncryptionDetails(ExternalLocationEncryptionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `putFileEventQueue` <a name="putFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue"></a>

```java
public void putFileEventQueue(ExternalLocationFileEventQueue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putProviderConfig"></a>

```java
public void putProviderConfig(ExternalLocationProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```java
public void resetComment()
```

##### `resetEffectiveFileEventQueue` <a name="resetEffectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEffectiveFileEventQueue"></a>

```java
public void resetEffectiveFileEventQueue()
```

##### `resetEnableFileEvents` <a name="resetEnableFileEvents" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents"></a>

```java
public void resetEnableFileEvents()
```

##### `resetEncryptionDetails` <a name="resetEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails"></a>

```java
public void resetEncryptionDetails()
```

##### `resetFallback` <a name="resetFallback" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetFallback"></a>

```java
public void resetFallback()
```

##### `resetFileEventQueue` <a name="resetFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue"></a>

```java
public void resetFileEventQueue()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```java
public void resetId()
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode"></a>

```java
public void resetIsolationMode()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSkipValidation` <a name="resetSkipValidation" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```java
public void resetSkipValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalLocation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocation;

ExternalLocation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocation;

ExternalLocation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocation;

ExternalLocation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocation;

ExternalLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExternalLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ExternalLocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExternalLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.browseOnly">browseOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialId">credentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveEnableFileEvents">effectiveEnableFileEvents</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveFileEventQueue">effectiveFileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference">ExternalLocationEffectiveFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue">fileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference">ExternalLocationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveFileEventQueueInput">effectiveFileEventQueueInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput">enableFileEventsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput">encryptionDetailsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput">fallbackInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput">fileEventQueueInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput">isolationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">skipValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents">enableFileEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fallback">fallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.browseOnly"></a>

```java
public IResolvable getBrowseOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialId"></a>

```java
public java.lang.String getCredentialId();
```

- *Type:* java.lang.String

---

##### `effectiveEnableFileEvents`<sup>Required</sup> <a name="effectiveEnableFileEvents" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveEnableFileEvents"></a>

```java
public IResolvable getEffectiveEnableFileEvents();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveFileEventQueue`<sup>Required</sup> <a name="effectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveFileEventQueue"></a>

```java
public ExternalLocationEffectiveFileEventQueueOutputReference getEffectiveFileEventQueue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference">ExternalLocationEffectiveFileEventQueueOutputReference</a>

---

##### `encryptionDetails`<sup>Required</sup> <a name="encryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails"></a>

```java
public ExternalLocationEncryptionDetailsOutputReference getEncryptionDetails();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a>

---

##### `fileEventQueue`<sup>Required</sup> <a name="fileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue"></a>

```java
public ExternalLocationFileEventQueueOutputReference getFileEventQueue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.providerConfig"></a>

```java
public ExternalLocationProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference">ExternalLocationProviderConfigOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `effectiveFileEventQueueInput`<sup>Optional</sup> <a name="effectiveFileEventQueueInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.effectiveFileEventQueueInput"></a>

```java
public ExternalLocationEffectiveFileEventQueue getEffectiveFileEventQueueInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a>

---

##### `enableFileEventsInput`<sup>Optional</sup> <a name="enableFileEventsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableFileEventsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionDetailsInput`<sup>Optional</sup> <a name="encryptionDetailsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput"></a>

```java
public ExternalLocationEncryptionDetails getEncryptionDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `fallbackInput`<sup>Optional</sup> <a name="fallbackInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput"></a>

```java
public java.lang.Boolean|IResolvable getFallbackInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileEventQueueInput`<sup>Optional</sup> <a name="fileEventQueueInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput"></a>

```java
public ExternalLocationFileEventQueue getFileEventQueueInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput"></a>

```java
public java.lang.String getIsolationModeInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.providerConfigInput"></a>

```java
public ExternalLocationProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipValidationInput`<sup>Optional</sup> <a name="skipValidationInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `enableFileEvents`<sup>Required</sup> <a name="enableFileEvents" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents"></a>

```java
public java.lang.Boolean|IResolvable getEnableFileEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.fallback"></a>

```java
public java.lang.Boolean|IResolvable getFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipValidation`<sup>Required</sup> <a name="skipValidation" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationConfig;

ExternalLocationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentialName(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .comment(java.lang.String)
//  .effectiveFileEventQueue(ExternalLocationEffectiveFileEventQueue)
//  .enableFileEvents(java.lang.Boolean|IResolvable)
//  .encryptionDetails(ExternalLocationEncryptionDetails)
//  .fallback(java.lang.Boolean|IResolvable)
//  .fileEventQueue(ExternalLocationFileEventQueue)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .isolationMode(java.lang.String)
//  .metastoreId(java.lang.String)
//  .owner(java.lang.String)
//  .providerConfig(ExternalLocationProviderConfig)
//  .readOnly(java.lang.Boolean|IResolvable)
//  .skipValidation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.effectiveFileEventQueue">effectiveFileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a></code> | effective_file_event_queue block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents">enableFileEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback">fallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#fallback ExternalLocation#fallback}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue">fileEventQueue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `effectiveFileEventQueue`<sup>Optional</sup> <a name="effectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.effectiveFileEventQueue"></a>

```java
public ExternalLocationEffectiveFileEventQueue getEffectiveFileEventQueue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a>

effective_file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#effective_file_event_queue ExternalLocation#effective_file_event_queue}

---

##### `enableFileEvents`<sup>Optional</sup> <a name="enableFileEvents" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents"></a>

```java
public java.lang.Boolean|IResolvable getEnableFileEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}.

---

##### `encryptionDetails`<sup>Optional</sup> <a name="encryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails"></a>

```java
public ExternalLocationEncryptionDetails getEncryptionDetails();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback"></a>

```java
public java.lang.Boolean|IResolvable getFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#fallback ExternalLocation#fallback}.

---

##### `fileEventQueue`<sup>Optional</sup> <a name="fileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue"></a>

```java
public ExternalLocationFileEventQueue getFileEventQueue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.providerConfig"></a>

```java
public ExternalLocationProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provider_config ExternalLocation#provider_config}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktn/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

### ExternalLocationEffectiveFileEventQueue <a name="ExternalLocationEffectiveFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueue;

ExternalLocationEffectiveFileEventQueue.builder()
//  .managedAqs(ExternalLocationEffectiveFileEventQueueManagedAqs)
//  .managedPubsub(ExternalLocationEffectiveFileEventQueueManagedPubsub)
//  .managedSqs(ExternalLocationEffectiveFileEventQueueManagedSqs)
//  .providedAqs(ExternalLocationEffectiveFileEventQueueProvidedAqs)
//  .providedPubsub(ExternalLocationEffectiveFileEventQueueProvidedPubsub)
//  .providedSqs(ExternalLocationEffectiveFileEventQueueProvidedSqs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `managedAqs`<sup>Optional</sup> <a name="managedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedAqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedAqs getManagedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}

---

##### `managedPubsub`<sup>Optional</sup> <a name="managedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedPubsub"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedPubsub getManagedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}

---

##### `managedSqs`<sup>Optional</sup> <a name="managedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.managedSqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedSqs getManagedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}

---

##### `providedAqs`<sup>Optional</sup> <a name="providedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedAqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedAqs getProvidedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}

---

##### `providedPubsub`<sup>Optional</sup> <a name="providedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedPubsub"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedPubsub getProvidedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}

---

##### `providedSqs`<sup>Optional</sup> <a name="providedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue.property.providedSqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedSqs getProvidedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}

---

### ExternalLocationEffectiveFileEventQueueManagedAqs <a name="ExternalLocationEffectiveFileEventQueueManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedAqs;

ExternalLocationEffectiveFileEventQueueManagedAqs.builder()
//  .managedResourceId(java.lang.String)
//  .queueUrl(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

### ExternalLocationEffectiveFileEventQueueManagedPubsub <a name="ExternalLocationEffectiveFileEventQueueManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedPubsub;

ExternalLocationEffectiveFileEventQueueManagedPubsub.builder()
//  .managedResourceId(java.lang.String)
//  .subscriptionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationEffectiveFileEventQueueManagedSqs <a name="ExternalLocationEffectiveFileEventQueueManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedSqs;

ExternalLocationEffectiveFileEventQueueManagedSqs.builder()
//  .managedResourceId(java.lang.String)
//  .queueUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationEffectiveFileEventQueueProvidedAqs <a name="ExternalLocationEffectiveFileEventQueueProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedAqs;

ExternalLocationEffectiveFileEventQueueProvidedAqs.builder()
//  .managedResourceId(java.lang.String)
//  .queueUrl(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

### ExternalLocationEffectiveFileEventQueueProvidedPubsub <a name="ExternalLocationEffectiveFileEventQueueProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedPubsub;

ExternalLocationEffectiveFileEventQueueProvidedPubsub.builder()
//  .managedResourceId(java.lang.String)
//  .subscriptionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationEffectiveFileEventQueueProvidedSqs <a name="ExternalLocationEffectiveFileEventQueueProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedSqs;

ExternalLocationEffectiveFileEventQueueProvidedSqs.builder()
//  .managedResourceId(java.lang.String)
//  .queueUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `managedResourceId`<sup>Optional</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_resource_id ExternalLocation#managed_resource_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationEncryptionDetails <a name="ExternalLocationEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEncryptionDetails;

ExternalLocationEncryptionDetails.builder()
//  .sseEncryptionDetails(ExternalLocationEncryptionDetailsSseEncryptionDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sseEncryptionDetails`<sup>Optional</sup> <a name="sseEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails"></a>

```java
public ExternalLocationEncryptionDetailsSseEncryptionDetails getSseEncryptionDetails();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}

---

### ExternalLocationEncryptionDetailsSseEncryptionDetails <a name="ExternalLocationEncryptionDetailsSseEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEncryptionDetailsSseEncryptionDetails;

ExternalLocationEncryptionDetailsSseEncryptionDetails.builder()
//  .algorithm(java.lang.String)
//  .awsKmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}.

---

### ExternalLocationFileEventQueue <a name="ExternalLocationFileEventQueue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueue;

ExternalLocationFileEventQueue.builder()
//  .managedAqs(ExternalLocationFileEventQueueManagedAqs)
//  .managedPubsub(ExternalLocationFileEventQueueManagedPubsub)
//  .managedSqs(ExternalLocationFileEventQueueManagedSqs)
//  .providedAqs(ExternalLocationFileEventQueueProvidedAqs)
//  .providedPubsub(ExternalLocationFileEventQueueProvidedPubsub)
//  .providedSqs(ExternalLocationFileEventQueueProvidedSqs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `managedAqs`<sup>Optional</sup> <a name="managedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs"></a>

```java
public ExternalLocationFileEventQueueManagedAqs getManagedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}

---

##### `managedPubsub`<sup>Optional</sup> <a name="managedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub"></a>

```java
public ExternalLocationFileEventQueueManagedPubsub getManagedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}

---

##### `managedSqs`<sup>Optional</sup> <a name="managedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs"></a>

```java
public ExternalLocationFileEventQueueManagedSqs getManagedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}

---

##### `providedAqs`<sup>Optional</sup> <a name="providedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs"></a>

```java
public ExternalLocationFileEventQueueProvidedAqs getProvidedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}

---

##### `providedPubsub`<sup>Optional</sup> <a name="providedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub"></a>

```java
public ExternalLocationFileEventQueueProvidedPubsub getProvidedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}

---

##### `providedSqs`<sup>Optional</sup> <a name="providedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs"></a>

```java
public ExternalLocationFileEventQueueProvidedSqs getProvidedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}

---

### ExternalLocationFileEventQueueManagedAqs <a name="ExternalLocationFileEventQueueManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedAqs;

ExternalLocationFileEventQueueManagedAqs.builder()
    .resourceGroup(java.lang.String)
    .subscriptionId(java.lang.String)
//  .queueUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueManagedPubsub <a name="ExternalLocationFileEventQueueManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedPubsub;

ExternalLocationFileEventQueueManagedPubsub.builder()
//  .subscriptionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueManagedSqs <a name="ExternalLocationFileEventQueueManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedSqs;

ExternalLocationFileEventQueueManagedSqs.builder()
//  .queueUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueProvidedAqs <a name="ExternalLocationFileEventQueueProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedAqs;

ExternalLocationFileEventQueueProvidedAqs.builder()
    .queueUrl(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

### ExternalLocationFileEventQueueProvidedPubsub <a name="ExternalLocationFileEventQueueProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedPubsub;

ExternalLocationFileEventQueueProvidedPubsub.builder()
    .subscriptionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueProvidedSqs <a name="ExternalLocationFileEventQueueProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedSqs;

ExternalLocationFileEventQueueProvidedSqs.builder()
    .queueUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationProviderConfig <a name="ExternalLocationProviderConfig" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationProviderConfig;

ExternalLocationProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#workspace_id ExternalLocation#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/external_location#workspace_id ExternalLocation#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference <a name="ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference;

new ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedAqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a>

---


### ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference <a name="ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference;

new ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```java
public void resetSubscriptionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedPubsub getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a>

---


### ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference <a name="ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference;

new ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedSqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a>

---


### ExternalLocationEffectiveFileEventQueueOutputReference <a name="ExternalLocationEffectiveFileEventQueueOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueOutputReference;

new ExternalLocationEffectiveFileEventQueueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedAqs">putManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedPubsub">putManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedSqs">putManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedAqs">putProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedPubsub">putProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedSqs">putProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedAqs">resetManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedPubsub">resetManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedSqs">resetManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedAqs">resetProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedPubsub">resetProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedSqs">resetProvidedSqs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedAqs` <a name="putManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedAqs"></a>

```java
public void putManagedAqs(ExternalLocationEffectiveFileEventQueueManagedAqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a>

---

##### `putManagedPubsub` <a name="putManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedPubsub"></a>

```java
public void putManagedPubsub(ExternalLocationEffectiveFileEventQueueManagedPubsub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a>

---

##### `putManagedSqs` <a name="putManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedSqs"></a>

```java
public void putManagedSqs(ExternalLocationEffectiveFileEventQueueManagedSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putManagedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a>

---

##### `putProvidedAqs` <a name="putProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedAqs"></a>

```java
public void putProvidedAqs(ExternalLocationEffectiveFileEventQueueProvidedAqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a>

---

##### `putProvidedPubsub` <a name="putProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedPubsub"></a>

```java
public void putProvidedPubsub(ExternalLocationEffectiveFileEventQueueProvidedPubsub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a>

---

##### `putProvidedSqs` <a name="putProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedSqs"></a>

```java
public void putProvidedSqs(ExternalLocationEffectiveFileEventQueueProvidedSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.putProvidedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a>

---

##### `resetManagedAqs` <a name="resetManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedAqs"></a>

```java
public void resetManagedAqs()
```

##### `resetManagedPubsub` <a name="resetManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedPubsub"></a>

```java
public void resetManagedPubsub()
```

##### `resetManagedSqs` <a name="resetManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetManagedSqs"></a>

```java
public void resetManagedSqs()
```

##### `resetProvidedAqs` <a name="resetProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedAqs"></a>

```java
public void resetProvidedAqs()
```

##### `resetProvidedPubsub` <a name="resetProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedPubsub"></a>

```java
public void resetProvidedPubsub()
```

##### `resetProvidedSqs` <a name="resetProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.resetProvidedSqs"></a>

```java
public void resetProvidedSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference">ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference">ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference">ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference">ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference">ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference">ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedAqsInput">managedAqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedPubsubInput">managedPubsubInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedSqsInput">managedSqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedAqsInput">providedAqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedPubsubInput">providedPubsubInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedSqsInput">providedSqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedAqs`<sup>Required</sup> <a name="managedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedAqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference getManagedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference">ExternalLocationEffectiveFileEventQueueManagedAqsOutputReference</a>

---

##### `managedPubsub`<sup>Required</sup> <a name="managedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedPubsub"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference getManagedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference">ExternalLocationEffectiveFileEventQueueManagedPubsubOutputReference</a>

---

##### `managedSqs`<sup>Required</sup> <a name="managedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedSqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference getManagedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference">ExternalLocationEffectiveFileEventQueueManagedSqsOutputReference</a>

---

##### `providedAqs`<sup>Required</sup> <a name="providedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedAqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference getProvidedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference">ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference</a>

---

##### `providedPubsub`<sup>Required</sup> <a name="providedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedPubsub"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference getProvidedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference">ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference</a>

---

##### `providedSqs`<sup>Required</sup> <a name="providedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedSqs"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference getProvidedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference">ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference</a>

---

##### `managedAqsInput`<sup>Optional</sup> <a name="managedAqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedAqsInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedAqs getManagedAqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedAqs">ExternalLocationEffectiveFileEventQueueManagedAqs</a>

---

##### `managedPubsubInput`<sup>Optional</sup> <a name="managedPubsubInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedPubsubInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedPubsub getManagedPubsubInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedPubsub">ExternalLocationEffectiveFileEventQueueManagedPubsub</a>

---

##### `managedSqsInput`<sup>Optional</sup> <a name="managedSqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.managedSqsInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueManagedSqs getManagedSqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueManagedSqs">ExternalLocationEffectiveFileEventQueueManagedSqs</a>

---

##### `providedAqsInput`<sup>Optional</sup> <a name="providedAqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedAqsInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedAqs getProvidedAqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a>

---

##### `providedPubsubInput`<sup>Optional</sup> <a name="providedPubsubInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedPubsubInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedPubsub getProvidedPubsubInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a>

---

##### `providedSqsInput`<sup>Optional</sup> <a name="providedSqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.providedSqsInput"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedSqs getProvidedSqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueue">ExternalLocationEffectiveFileEventQueue</a>

---


### ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference <a name="ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference;

new ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedAqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedAqs">ExternalLocationEffectiveFileEventQueueProvidedAqs</a>

---


### ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference <a name="ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference;

new ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName"></a>

```java
public void resetSubscriptionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedPubsub getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedPubsub">ExternalLocationEffectiveFileEventQueueProvidedPubsub</a>

---


### ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference <a name="ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference;

new ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resetManagedResourceId">resetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedResourceId` <a name="resetManagedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resetManagedResourceId"></a>

```java
public void resetManagedResourceId()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput">managedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceIdInput`<sup>Optional</sup> <a name="managedResourceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput"></a>

```java
public java.lang.String getManagedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEffectiveFileEventQueueProvidedSqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEffectiveFileEventQueueProvidedSqs">ExternalLocationEffectiveFileEventQueueProvidedSqs</a>

---


### ExternalLocationEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEncryptionDetailsOutputReference;

new ExternalLocationEncryptionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails">putSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails">resetSseEncryptionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseEncryptionDetails` <a name="putSseEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```java
public void putSseEncryptionDetails(ExternalLocationEncryptionDetailsSseEncryptionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `resetSseEncryptionDetails` <a name="resetSseEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```java
public void resetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sseEncryptionDetailsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sseEncryptionDetails`<sup>Required</sup> <a name="sseEncryptionDetails" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```java
public ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference getSseEncryptionDetails();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sseEncryptionDetailsInput`<sup>Optional</sup> <a name="sseEncryptionDetailsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```java
public ExternalLocationEncryptionDetailsSseEncryptionDetails getSseEncryptionDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEncryptionDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---


### ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference;

new ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```java
public void resetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```java
public java.lang.String getAwsKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```java
public java.lang.String getAwsKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```java
public ExternalLocationEncryptionDetailsSseEncryptionDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---


### ExternalLocationFileEventQueueManagedAqsOutputReference <a name="ExternalLocationFileEventQueueManagedAqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedAqsOutputReference;

new ExternalLocationFileEventQueueManagedAqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueManagedAqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---


### ExternalLocationFileEventQueueManagedPubsubOutputReference <a name="ExternalLocationFileEventQueueManagedPubsubOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedPubsubOutputReference;

new ExternalLocationFileEventQueueManagedPubsubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```java
public void resetSubscriptionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueManagedPubsub getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---


### ExternalLocationFileEventQueueManagedSqsOutputReference <a name="ExternalLocationFileEventQueueManagedSqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueManagedSqsOutputReference;

new ExternalLocationFileEventQueueManagedSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueManagedSqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---


### ExternalLocationFileEventQueueOutputReference <a name="ExternalLocationFileEventQueueOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueOutputReference;

new ExternalLocationFileEventQueueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs">putManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub">putManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs">putManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs">putProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub">putProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs">putProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs">resetManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub">resetManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs">resetManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs">resetProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub">resetProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs">resetProvidedSqs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedAqs` <a name="putManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs"></a>

```java
public void putManagedAqs(ExternalLocationFileEventQueueManagedAqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---

##### `putManagedPubsub` <a name="putManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub"></a>

```java
public void putManagedPubsub(ExternalLocationFileEventQueueManagedPubsub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---

##### `putManagedSqs` <a name="putManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs"></a>

```java
public void putManagedSqs(ExternalLocationFileEventQueueManagedSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---

##### `putProvidedAqs` <a name="putProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs"></a>

```java
public void putProvidedAqs(ExternalLocationFileEventQueueProvidedAqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---

##### `putProvidedPubsub` <a name="putProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub"></a>

```java
public void putProvidedPubsub(ExternalLocationFileEventQueueProvidedPubsub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---

##### `putProvidedSqs` <a name="putProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs"></a>

```java
public void putProvidedSqs(ExternalLocationFileEventQueueProvidedSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---

##### `resetManagedAqs` <a name="resetManagedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs"></a>

```java
public void resetManagedAqs()
```

##### `resetManagedPubsub` <a name="resetManagedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub"></a>

```java
public void resetManagedPubsub()
```

##### `resetManagedSqs` <a name="resetManagedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs"></a>

```java
public void resetManagedSqs()
```

##### `resetProvidedAqs` <a name="resetProvidedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs"></a>

```java
public void resetProvidedAqs()
```

##### `resetProvidedPubsub` <a name="resetProvidedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub"></a>

```java
public void resetProvidedPubsub()
```

##### `resetProvidedSqs` <a name="resetProvidedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs"></a>

```java
public void resetProvidedSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs">managedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub">managedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs">managedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs">providedAqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub">providedPubsub</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs">providedSqs</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput">managedAqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput">managedPubsubInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput">managedSqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput">providedAqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput">providedPubsubInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput">providedSqsInput</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedAqs`<sup>Required</sup> <a name="managedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs"></a>

```java
public ExternalLocationFileEventQueueManagedAqsOutputReference getManagedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a>

---

##### `managedPubsub`<sup>Required</sup> <a name="managedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub"></a>

```java
public ExternalLocationFileEventQueueManagedPubsubOutputReference getManagedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a>

---

##### `managedSqs`<sup>Required</sup> <a name="managedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs"></a>

```java
public ExternalLocationFileEventQueueManagedSqsOutputReference getManagedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a>

---

##### `providedAqs`<sup>Required</sup> <a name="providedAqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs"></a>

```java
public ExternalLocationFileEventQueueProvidedAqsOutputReference getProvidedAqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a>

---

##### `providedPubsub`<sup>Required</sup> <a name="providedPubsub" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub"></a>

```java
public ExternalLocationFileEventQueueProvidedPubsubOutputReference getProvidedPubsub();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a>

---

##### `providedSqs`<sup>Required</sup> <a name="providedSqs" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs"></a>

```java
public ExternalLocationFileEventQueueProvidedSqsOutputReference getProvidedSqs();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a>

---

##### `managedAqsInput`<sup>Optional</sup> <a name="managedAqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput"></a>

```java
public ExternalLocationFileEventQueueManagedAqs getManagedAqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---

##### `managedPubsubInput`<sup>Optional</sup> <a name="managedPubsubInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput"></a>

```java
public ExternalLocationFileEventQueueManagedPubsub getManagedPubsubInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---

##### `managedSqsInput`<sup>Optional</sup> <a name="managedSqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput"></a>

```java
public ExternalLocationFileEventQueueManagedSqs getManagedSqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---

##### `providedAqsInput`<sup>Optional</sup> <a name="providedAqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput"></a>

```java
public ExternalLocationFileEventQueueProvidedAqs getProvidedAqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---

##### `providedPubsubInput`<sup>Optional</sup> <a name="providedPubsubInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput"></a>

```java
public ExternalLocationFileEventQueueProvidedPubsub getProvidedPubsubInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---

##### `providedSqsInput`<sup>Optional</sup> <a name="providedSqsInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput"></a>

```java
public ExternalLocationFileEventQueueProvidedSqs getProvidedSqsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---


### ExternalLocationFileEventQueueProvidedAqsOutputReference <a name="ExternalLocationFileEventQueueProvidedAqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedAqsOutputReference;

new ExternalLocationFileEventQueueProvidedAqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueProvidedAqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---


### ExternalLocationFileEventQueueProvidedPubsubOutputReference <a name="ExternalLocationFileEventQueueProvidedPubsubOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedPubsubOutputReference;

new ExternalLocationFileEventQueueProvidedPubsubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">subscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```java
public java.lang.String getSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```java
public java.lang.String getSubscriptionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueProvidedPubsub getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---


### ExternalLocationFileEventQueueProvidedSqsOutputReference <a name="ExternalLocationFileEventQueueProvidedSqsOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationFileEventQueueProvidedSqsOutputReference;

new ExternalLocationFileEventQueueProvidedSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId">managedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedResourceId`<sup>Required</sup> <a name="managedResourceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```java
public java.lang.String getManagedResourceId();
```

- *Type:* java.lang.String

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```java
public ExternalLocationFileEventQueueProvidedSqs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---


### ExternalLocationProviderConfigOutputReference <a name="ExternalLocationProviderConfigOutputReference" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.external_location.ExternalLocationProviderConfigOutputReference;

new ExternalLocationProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfigOutputReference.property.internalValue"></a>

```java
public ExternalLocationProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.externalLocation.ExternalLocationProviderConfig">ExternalLocationProviderConfig</a>

---



