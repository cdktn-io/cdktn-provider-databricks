# `catalog` Submodule <a name="`catalog` Submodule" id="@cdktn/provider-databricks.catalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Catalog <a name="Catalog" id="@cdktn/provider-databricks.catalog.Catalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.Catalog.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.Catalog;

Catalog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .browseOnly(java.lang.Boolean|IResolvable)
//  .comment(java.lang.String)
//  .connectionName(java.lang.String)
//  .effectivePredictiveOptimizationFlag(CatalogEffectivePredictiveOptimizationFlag)
//  .enablePredictiveOptimization(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .isolationMode(java.lang.String)
//  .managedEncryptionSettings(CatalogManagedEncryptionSettings)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .providerConfig(CatalogProviderConfig)
//  .providerName(java.lang.String)
//  .provisioningInfo(CatalogProvisioningInfo)
//  .shareName(java.lang.String)
//  .storageRoot(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.managedEncryptionSettings">managedEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | managed_encryption_settings block. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.browseOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.connectionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.effectivePredictiveOptimizationFlag"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.enablePredictiveOptimization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.isolationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `managedEncryptionSettings`<sup>Optional</sup> <a name="managedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.managedEncryptionSettings"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

managed_encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#managed_encryption_settings Catalog#managed_encryption_settings}

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#name Catalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#options Catalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_config Catalog#provider_config}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `provisioningInfo`<sup>Optional</sup> <a name="provisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.provisioningInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.shareName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.storageRoot"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings">putManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo">putProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetManagedEncryptionSettings">resetManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProvisioningInfo">resetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.Catalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.catalog.Catalog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.catalog.Catalog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.catalog.Catalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.catalog.Catalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.catalog.Catalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.catalog.Catalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.catalog.Catalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.catalog.Catalog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalog.Catalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.catalog.Catalog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.catalog.Catalog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.catalog.Catalog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.catalog.Catalog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalog.Catalog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.catalog.Catalog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.catalog.Catalog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag"></a>

```java
public void putEffectivePredictiveOptimizationFlag(CatalogEffectivePredictiveOptimizationFlag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `putManagedEncryptionSettings` <a name="putManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings"></a>

```java
public void putManagedEncryptionSettings(CatalogManagedEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.catalog.Catalog.putProviderConfig"></a>

```java
public void putProviderConfig(CatalogProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---

##### `putProvisioningInfo` <a name="putProvisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo"></a>

```java
public void putProvisioningInfo(CatalogProvisioningInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktn/provider-databricks.catalog.Catalog.resetBrowseOnly"></a>

```java
public void resetBrowseOnly()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.catalog.Catalog.resetComment"></a>

```java
public void resetComment()
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-databricks.catalog.Catalog.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag"></a>

```java
public void resetEffectivePredictiveOptimizationFlag()
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization"></a>

```java
public void resetEnablePredictiveOptimization()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-databricks.catalog.Catalog.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.catalog.Catalog.resetId"></a>

```java
public void resetId()
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktn/provider-databricks.catalog.Catalog.resetIsolationMode"></a>

```java
public void resetIsolationMode()
```

##### `resetManagedEncryptionSettings` <a name="resetManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.resetManagedEncryptionSettings"></a>

```java
public void resetManagedEncryptionSettings()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.catalog.Catalog.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.catalog.Catalog.resetName"></a>

```java
public void resetName()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-databricks.catalog.Catalog.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.catalog.Catalog.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-databricks.catalog.Catalog.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.catalog.Catalog.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-databricks.catalog.Catalog.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetProvisioningInfo` <a name="resetProvisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.resetProvisioningInfo"></a>

```java
public void resetProvisioningInfo()
```

##### `resetShareName` <a name="resetShareName" id="@cdktn/provider-databricks.catalog.Catalog.resetShareName"></a>

```java
public void resetShareName()
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktn/provider-databricks.catalog.Catalog.resetStorageRoot"></a>

```java
public void resetStorageRoot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Catalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.catalog.Catalog.isConstruct"></a>

```java
import io.cdktn.providers.databricks.catalog.Catalog;

Catalog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.catalog.Catalog;

Catalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.catalog.Catalog;

Catalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.catalog.Catalog;

Catalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Catalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Catalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Catalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Catalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Catalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettings">managedEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference">CatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.browseOnlyInput">browseOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.isolationModeInput">isolationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettingsInput">managedEncryptionSettingsInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfoInput">provisioningInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageRootInput">storageRootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.catalog.Catalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.catalog.Catalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.Catalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.catalog.Catalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.catalog.Catalog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.catalog.Catalog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.catalog.Catalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.catalog.Catalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.catalog.Catalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-databricks.catalog.Catalog.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.catalog.Catalog.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.catalog.Catalog.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag"></a>

```java
public CatalogEffectivePredictiveOptimizationFlagOutputReference getEffectivePredictiveOptimizationFlag();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.catalog.Catalog.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `managedEncryptionSettings`<sup>Required</sup> <a name="managedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettings"></a>

```java
public CatalogManagedEncryptionSettingsOutputReference getManagedEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.catalog.Catalog.property.providerConfig"></a>

```java
public CatalogProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference">CatalogProviderConfigOutputReference</a>

---

##### `provisioningInfo`<sup>Required</sup> <a name="provisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfo"></a>

```java
public CatalogProvisioningInfoOutputReference getProvisioningInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a>

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.catalog.Catalog.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-databricks.catalog.Catalog.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.catalog.Catalog.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.catalog.Catalog.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktn/provider-databricks.catalog.Catalog.property.browseOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.catalog.Catalog.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput"></a>

```java
public CatalogEffectivePredictiveOptimizationFlag getEffectivePredictiveOptimizationFlagInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput"></a>

```java
public java.lang.String getEnablePredictiveOptimizationInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-databricks.catalog.Catalog.property.forceDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.catalog.Catalog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktn/provider-databricks.catalog.Catalog.property.isolationModeInput"></a>

```java
public java.lang.String getIsolationModeInput();
```

- *Type:* java.lang.String

---

##### `managedEncryptionSettingsInput`<sup>Optional</sup> <a name="managedEncryptionSettingsInput" id="@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettingsInput"></a>

```java
public CatalogManagedEncryptionSettings getManagedEncryptionSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.catalog.Catalog.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-databricks.catalog.Catalog.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.catalog.Catalog.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-databricks.catalog.Catalog.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.catalog.Catalog.property.providerConfigInput"></a>

```java
public CatalogProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `provisioningInfoInput`<sup>Optional</sup> <a name="provisioningInfoInput" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfoInput"></a>

```java
public CatalogProvisioningInfo getProvisioningInfoInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktn/provider-databricks.catalog.Catalog.property.storageRootInput"></a>

```java
public java.lang.String getStorageRootInput();
```

- *Type:* java.lang.String

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.catalog.Catalog.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.catalog.Catalog.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.catalog.Catalog.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization"></a>

```java
public java.lang.String getEnablePredictiveOptimization();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.catalog.Catalog.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktn/provider-databricks.catalog.Catalog.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.catalog.Catalog.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.catalog.Catalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.catalog.Catalog.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.catalog.Catalog.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-databricks.catalog.Catalog.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-databricks.catalog.Catalog.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-databricks.catalog.Catalog.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktn/provider-databricks.catalog.Catalog.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.catalog.Catalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogConfig <a name="CatalogConfig" id="@cdktn/provider-databricks.catalog.CatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogConfig;

CatalogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .browseOnly(java.lang.Boolean|IResolvable)
//  .comment(java.lang.String)
//  .connectionName(java.lang.String)
//  .effectivePredictiveOptimizationFlag(CatalogEffectivePredictiveOptimizationFlag)
//  .enablePredictiveOptimization(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .isolationMode(java.lang.String)
//  .managedEncryptionSettings(CatalogManagedEncryptionSettings)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .providerConfig(CatalogProviderConfig)
//  .providerName(java.lang.String)
//  .provisioningInfo(CatalogProvisioningInfo)
//  .shareName(java.lang.String)
//  .storageRoot(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.managedEncryptionSettings">managedEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | managed_encryption_settings block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioningInfo">provisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag"></a>

```java
public CatalogEffectivePredictiveOptimizationFlag getEffectivePredictiveOptimizationFlag();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization"></a>

```java
public java.lang.String getEnablePredictiveOptimization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `managedEncryptionSettings`<sup>Optional</sup> <a name="managedEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.managedEncryptionSettings"></a>

```java
public CatalogManagedEncryptionSettings getManagedEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

managed_encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#managed_encryption_settings Catalog#managed_encryption_settings}

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#name Catalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#options Catalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.providerConfig"></a>

```java
public CatalogProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_config Catalog#provider_config}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `provisioningInfo`<sup>Optional</sup> <a name="provisioningInfo" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioningInfo"></a>

```java
public CatalogProvisioningInfo getProvisioningInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

### CatalogEffectivePredictiveOptimizationFlag <a name="CatalogEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogEffectivePredictiveOptimizationFlag;

CatalogEffectivePredictiveOptimizationFlag.builder()
    .value(java.lang.String)
//  .inheritedFromName(java.lang.String)
//  .inheritedFromType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#value Catalog#value}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#value Catalog#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```java
public java.lang.String getInheritedFromName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```java
public java.lang.String getInheritedFromType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}.

---

### CatalogManagedEncryptionSettings <a name="CatalogManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogManagedEncryptionSettings;

CatalogManagedEncryptionSettings.builder()
//  .azureEncryptionSettings(CatalogManagedEncryptionSettingsAzureEncryptionSettings)
//  .azureKeyVaultKeyId(java.lang.String)
//  .customerManagedKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureEncryptionSettings">azureEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | azure_encryption_settings block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureKeyVaultKeyId">azureKeyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_key_vault_key_id Catalog#azure_key_vault_key_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#customer_managed_key_id Catalog#customer_managed_key_id}. |

---

##### `azureEncryptionSettings`<sup>Optional</sup> <a name="azureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureEncryptionSettings"></a>

```java
public CatalogManagedEncryptionSettingsAzureEncryptionSettings getAzureEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

azure_encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_encryption_settings Catalog#azure_encryption_settings}

---

##### `azureKeyVaultKeyId`<sup>Optional</sup> <a name="azureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureKeyVaultKeyId"></a>

```java
public java.lang.String getAzureKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_key_vault_key_id Catalog#azure_key_vault_key_id}.

---

##### `customerManagedKeyId`<sup>Optional</sup> <a name="customerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#customer_managed_key_id Catalog#customer_managed_key_id}.

---

### CatalogManagedEncryptionSettingsAzureEncryptionSettings <a name="CatalogManagedEncryptionSettingsAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings;

CatalogManagedEncryptionSettingsAzureEncryptionSettings.builder()
    .azureTenantId(java.lang.String)
//  .azureCmkAccessConnectorId(java.lang.String)
//  .azureCmkManagedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_tenant_id Catalog#azure_tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkAccessConnectorId">azureCmkAccessConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_cmk_access_connector_id Catalog#azure_cmk_access_connector_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkManagedIdentityId">azureCmkManagedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_cmk_managed_identity_id Catalog#azure_cmk_managed_identity_id}. |

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_tenant_id Catalog#azure_tenant_id}.

---

##### `azureCmkAccessConnectorId`<sup>Optional</sup> <a name="azureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkAccessConnectorId"></a>

```java
public java.lang.String getAzureCmkAccessConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_cmk_access_connector_id Catalog#azure_cmk_access_connector_id}.

---

##### `azureCmkManagedIdentityId`<sup>Optional</sup> <a name="azureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkManagedIdentityId"></a>

```java
public java.lang.String getAzureCmkManagedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#azure_cmk_managed_identity_id Catalog#azure_cmk_managed_identity_id}.

---

### CatalogProviderConfig <a name="CatalogProviderConfig" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogProviderConfig;

CatalogProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#workspace_id Catalog#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#workspace_id Catalog#workspace_id}.

---

### CatalogProvisioningInfo <a name="CatalogProvisioningInfo" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogProvisioningInfo;

CatalogProvisioningInfo.builder()
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#state Catalog#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/catalog#state Catalog#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogEffectivePredictiveOptimizationFlagOutputReference <a name="CatalogEffectivePredictiveOptimizationFlagOutputReference" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference;

new CatalogEffectivePredictiveOptimizationFlagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```java
public void resetInheritedFromName()
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```java
public void resetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```java
public java.lang.String getInheritedFromNameInput();
```

- *Type:* java.lang.String

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```java
public java.lang.String getInheritedFromTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```java
public java.lang.String getInheritedFromName();
```

- *Type:* java.lang.String

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```java
public java.lang.String getInheritedFromType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```java
public CatalogEffectivePredictiveOptimizationFlag getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---


### CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference <a name="CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference;

new CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkAccessConnectorId">resetAzureCmkAccessConnectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkManagedIdentityId">resetAzureCmkManagedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureCmkAccessConnectorId` <a name="resetAzureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkAccessConnectorId"></a>

```java
public void resetAzureCmkAccessConnectorId()
```

##### `resetAzureCmkManagedIdentityId` <a name="resetAzureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkManagedIdentityId"></a>

```java
public void resetAzureCmkManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorIdInput">azureCmkAccessConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityIdInput">azureCmkManagedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorId">azureCmkAccessConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityId">azureCmkManagedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureCmkAccessConnectorIdInput`<sup>Optional</sup> <a name="azureCmkAccessConnectorIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorIdInput"></a>

```java
public java.lang.String getAzureCmkAccessConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `azureCmkManagedIdentityIdInput`<sup>Optional</sup> <a name="azureCmkManagedIdentityIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityIdInput"></a>

```java
public java.lang.String getAzureCmkManagedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `azureCmkAccessConnectorId`<sup>Required</sup> <a name="azureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorId"></a>

```java
public java.lang.String getAzureCmkAccessConnectorId();
```

- *Type:* java.lang.String

---

##### `azureCmkManagedIdentityId`<sup>Required</sup> <a name="azureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityId"></a>

```java
public java.lang.String getAzureCmkManagedIdentityId();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public CatalogManagedEncryptionSettingsAzureEncryptionSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---


### CatalogManagedEncryptionSettingsOutputReference <a name="CatalogManagedEncryptionSettingsOutputReference" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogManagedEncryptionSettingsOutputReference;

new CatalogManagedEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings">putAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureEncryptionSettings">resetAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureKeyVaultKeyId">resetAzureKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetCustomerManagedKeyId">resetCustomerManagedKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureEncryptionSettings` <a name="putAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings"></a>

```java
public void putAzureEncryptionSettings(CatalogManagedEncryptionSettingsAzureEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---

##### `resetAzureEncryptionSettings` <a name="resetAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureEncryptionSettings"></a>

```java
public void resetAzureEncryptionSettings()
```

##### `resetAzureKeyVaultKeyId` <a name="resetAzureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureKeyVaultKeyId"></a>

```java
public void resetAzureKeyVaultKeyId()
```

##### `resetCustomerManagedKeyId` <a name="resetCustomerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetCustomerManagedKeyId"></a>

```java
public void resetCustomerManagedKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettings">azureEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettingsInput">azureEncryptionSettingsInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyIdInput">azureKeyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyIdInput">customerManagedKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyId">azureKeyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureEncryptionSettings`<sup>Required</sup> <a name="azureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettings"></a>

```java
public CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference getAzureEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference</a>

---

##### `azureEncryptionSettingsInput`<sup>Optional</sup> <a name="azureEncryptionSettingsInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettingsInput"></a>

```java
public CatalogManagedEncryptionSettingsAzureEncryptionSettings getAzureEncryptionSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---

##### `azureKeyVaultKeyIdInput`<sup>Optional</sup> <a name="azureKeyVaultKeyIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyIdInput"></a>

```java
public java.lang.String getAzureKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyIdInput`<sup>Optional</sup> <a name="customerManagedKeyIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyIdInput"></a>

```java
public java.lang.String getCustomerManagedKeyIdInput();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultKeyId`<sup>Required</sup> <a name="azureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyId"></a>

```java
public java.lang.String getAzureKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyId"></a>

```java
public java.lang.String getCustomerManagedKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public CatalogManagedEncryptionSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---


### CatalogProviderConfigOutputReference <a name="CatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogProviderConfigOutputReference;

new CatalogProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.internalValue"></a>

```java
public CatalogProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---


### CatalogProvisioningInfoOutputReference <a name="CatalogProvisioningInfoOutputReference" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.catalog.CatalogProvisioningInfoOutputReference;

new CatalogProvisioningInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue"></a>

```java
public CatalogProvisioningInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---



