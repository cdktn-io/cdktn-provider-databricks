# `metastore` Submodule <a name="`metastore` Submodule" id="@cdktn/provider-databricks.metastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metastore <a name="Metastore" id="@cdktn/provider-databricks.metastore.Metastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.Metastore.Initializer"></a>

```java
import io.cdktn.providers.databricks.metastore.Metastore;

Metastore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .api(java.lang.String)
//  .defaultDataAccessConfigId(java.lang.String)
//  .deltaSharingOrganizationName(java.lang.String)
//  .deltaSharingRecipientTokenLifetimeInSeconds(java.lang.Number)
//  .deltaSharingScope(java.lang.String)
//  .externalAccessEnabled(java.lang.Boolean|IResolvable)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .privilegeModelVersion(java.lang.String)
//  .providerConfig(MetastoreProviderConfig)
//  .region(java.lang.String)
//  .storageRoot(java.lang.String)
//  .storageRootCredentialId(java.lang.String)
//  .storageRootCredentialName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#id Metastore#id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#name Metastore#name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#region Metastore#region}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.api"></a>

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#api Metastore#api}

---

##### `defaultDataAccessConfigId`<sup>Optional</sup> <a name="defaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.defaultDataAccessConfigId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `deltaSharingOrganizationName`<sup>Optional</sup> <a name="deltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingOrganizationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingRecipientTokenLifetimeInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `deltaSharingScope`<sup>Optional</sup> <a name="deltaSharingScope" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.externalAccessEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#force_destroy Metastore#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#name Metastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#owner Metastore#owner}.

---

##### `privilegeModelVersion`<sup>Optional</sup> <a name="privilegeModelVersion" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.privilegeModelVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#provider_config Metastore#provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#region Metastore#region}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRoot"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root Metastore#storage_root}.

---

##### `storageRootCredentialId`<sup>Optional</sup> <a name="storageRootCredentialId" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}.

---

##### `storageRootCredentialName`<sup>Optional</sup> <a name="storageRootCredentialName" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetApi">resetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId">resetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName">resetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds">resetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope">resetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled">resetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion">resetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId">resetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName">resetStorageRootCredentialName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.metastore.Metastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.metastore.Metastore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.metastore.Metastore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.metastore.Metastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.metastore.Metastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.metastore.Metastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.metastore.Metastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.metastore.Metastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.metastore.Metastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.metastore.Metastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.metastore.Metastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig"></a>

```java
public void putProviderConfig(MetastoreProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---

##### `resetApi` <a name="resetApi" id="@cdktn/provider-databricks.metastore.Metastore.resetApi"></a>

```java
public void resetApi()
```

##### `resetDefaultDataAccessConfigId` <a name="resetDefaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId"></a>

```java
public void resetDefaultDataAccessConfigId()
```

##### `resetDeltaSharingOrganizationName` <a name="resetDeltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName"></a>

```java
public void resetDeltaSharingOrganizationName()
```

##### `resetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="resetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public void resetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `resetDeltaSharingScope` <a name="resetDeltaSharingScope" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope"></a>

```java
public void resetDeltaSharingScope()
```

##### `resetExternalAccessEnabled` <a name="resetExternalAccessEnabled" id="@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled"></a>

```java
public void resetExternalAccessEnabled()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.metastore.Metastore.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.metastore.Metastore.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.metastore.Metastore.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPrivilegeModelVersion` <a name="resetPrivilegeModelVersion" id="@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion"></a>

```java
public void resetPrivilegeModelVersion()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-databricks.metastore.Metastore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot"></a>

```java
public void resetStorageRoot()
```

##### `resetStorageRootCredentialId` <a name="resetStorageRootCredentialId" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId"></a>

```java
public void resetStorageRootCredentialId()
```

##### `resetStorageRootCredentialName` <a name="resetStorageRootCredentialName" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName"></a>

```java
public void resetStorageRootCredentialName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct"></a>

```java
import io.cdktn.providers.databricks.metastore.Metastore;

Metastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.metastore.Metastore;

Metastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.metastore.Metastore;

Metastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.metastore.Metastore;

Metastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Metastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Metastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Metastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Metastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId">globalMetastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.apiInput">apiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput">defaultDataAccessConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput">deltaSharingOrganizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput">deltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput">deltaSharingScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput">externalAccessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput">privilegeModelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput">storageRootCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput">storageRootCredentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput">storageRootInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.metastore.Metastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.metastore.Metastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.Metastore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.Metastore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.metastore.Metastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.metastore.Metastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.Metastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.Metastore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-databricks.metastore.Metastore.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.metastore.Metastore.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.metastore.Metastore.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId"></a>

```java
public java.lang.String getGlobalMetastoreId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.metastore.Metastore.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfig"></a>

```java
public MetastoreProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-databricks.metastore.Metastore.property.apiInput"></a>

```java
public java.lang.String getApiInput();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="defaultDataAccessConfigIdInput" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput"></a>

```java
public java.lang.String getDefaultDataAccessConfigIdInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="deltaSharingOrganizationNameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput"></a>

```java
public java.lang.String getDeltaSharingOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScopeInput`<sup>Optional</sup> <a name="deltaSharingScopeInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput"></a>

```java
public java.lang.String getDeltaSharingScopeInput();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabledInput`<sup>Optional</sup> <a name="externalAccessEnabledInput" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalAccessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.metastore.Metastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.metastore.Metastore.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersionInput`<sup>Optional</sup> <a name="privilegeModelVersionInput" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput"></a>

```java
public java.lang.String getPrivilegeModelVersionInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput"></a>

```java
public MetastoreProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.metastore.Metastore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialIdInput`<sup>Optional</sup> <a name="storageRootCredentialIdInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput"></a>

```java
public java.lang.String getStorageRootCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialNameInput`<sup>Optional</sup> <a name="storageRootCredentialNameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput"></a>

```java
public java.lang.String getStorageRootCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput"></a>

```java
public java.lang.String getStorageRootInput();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.metastore.Metastore.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `defaultDataAccessConfigId`<sup>Required</sup> <a name="defaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

---

##### `deltaSharingOrganizationName`<sup>Required</sup> <a name="deltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `deltaSharingScope`<sup>Required</sup> <a name="deltaSharingScope" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.metastore.Metastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.Metastore.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `privilegeModelVersion`<sup>Required</sup> <a name="privilegeModelVersion" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.metastore.Metastore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialId`<sup>Required</sup> <a name="storageRootCredentialId" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

---

##### `storageRootCredentialName`<sup>Required</sup> <a name="storageRootCredentialName" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreConfig <a name="MetastoreConfig" id="@cdktn/provider-databricks.metastore.MetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.metastore.MetastoreConfig;

MetastoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .api(java.lang.String)
//  .defaultDataAccessConfigId(java.lang.String)
//  .deltaSharingOrganizationName(java.lang.String)
//  .deltaSharingRecipientTokenLifetimeInSeconds(java.lang.Number)
//  .deltaSharingScope(java.lang.String)
//  .externalAccessEnabled(java.lang.Boolean|IResolvable)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .privilegeModelVersion(java.lang.String)
//  .providerConfig(MetastoreProviderConfig)
//  .region(java.lang.String)
//  .storageRoot(java.lang.String)
//  .storageRootCredentialId(java.lang.String)
//  .storageRootCredentialName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.api">api</a></code> | <code>java.lang.String</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId">defaultDataAccessConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds">deltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope">deltaSharingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#id Metastore#id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#name Metastore#name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion">privilegeModelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#region Metastore#region}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot">storageRoot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId">storageRootCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName">storageRootCredentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#api Metastore#api}

---

##### `defaultDataAccessConfigId`<sup>Optional</sup> <a name="defaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId"></a>

```java
public java.lang.String getDefaultDataAccessConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `deltaSharingOrganizationName`<sup>Optional</sup> <a name="deltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName"></a>

```java
public java.lang.String getDeltaSharingOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `deltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="deltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```java
public java.lang.Number getDeltaSharingRecipientTokenLifetimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `deltaSharingScope`<sup>Optional</sup> <a name="deltaSharingScope" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope"></a>

```java
public java.lang.String getDeltaSharingScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExternalAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#force_destroy Metastore#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#name Metastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#owner Metastore#owner}.

---

##### `privilegeModelVersion`<sup>Optional</sup> <a name="privilegeModelVersion" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion"></a>

```java
public java.lang.String getPrivilegeModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig"></a>

```java
public MetastoreProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#provider_config Metastore#provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#region Metastore#region}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot"></a>

```java
public java.lang.String getStorageRoot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root Metastore#storage_root}.

---

##### `storageRootCredentialId`<sup>Optional</sup> <a name="storageRootCredentialId" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId"></a>

```java
public java.lang.String getStorageRootCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}.

---

##### `storageRootCredentialName`<sup>Optional</sup> <a name="storageRootCredentialName" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName"></a>

```java
public java.lang.String getStorageRootCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}.

---

### MetastoreProviderConfig <a name="MetastoreProviderConfig" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.metastore.MetastoreProviderConfig;

MetastoreProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#workspace_id Metastore#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/metastore#workspace_id Metastore#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MetastoreProviderConfigOutputReference <a name="MetastoreProviderConfigOutputReference" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.metastore.MetastoreProviderConfigOutputReference;

new MetastoreProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue"></a>

```java
public MetastoreProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---



