# `registeredModel` Submodule <a name="`registeredModel` Submodule" id="@cdktn/provider-databricks.registeredModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredModel <a name="RegisteredModel" id="@cdktn/provider-databricks.registeredModel.RegisteredModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model databricks_registered_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModel;

RegisteredModel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aliases(IResolvable|java.util.List<RegisteredModelAliases>)
//  .browseOnly(java.lang.Boolean|IResolvable)
//  .catalogName(java.lang.String)
//  .comment(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .fullName(java.lang.String)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .providerConfig(RegisteredModelProviderConfig)
//  .schemaName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.aliases">aliases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>></code> | aliases block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#comment RegisteredModel#comment}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_at RegisteredModel#created_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_by RegisteredModel#created_by}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#full_name RegisteredModel#full_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#name RegisteredModel#name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#owner RegisteredModel#owner}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.aliases"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#aliases RegisteredModel#aliases}

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.browseOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#comment RegisteredModel#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_at RegisteredModel#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_by RegisteredModel#created_by}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.fullName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#full_name RegisteredModel#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#name RegisteredModel#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#owner RegisteredModel#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#provider_config RegisteredModel#provider_config}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.storageLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.updatedAt"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.updatedBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAliases` <a name="putAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases"></a>

```java
public void putAliases(IResolvable|java.util.List<RegisteredModelAliases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putAliases.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig"></a>

```java
public void putProviderConfig(RegisteredModelProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---

##### `resetAliases` <a name="resetAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly"></a>

```java
public void resetBrowseOnly()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetFullName` <a name="resetFullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetFullName"></a>

```java
public void resetFullName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation"></a>

```java
public void resetStorageLocation()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy"></a>

```java
public void resetUpdatedBy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RegisteredModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModel;

RegisteredModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModel;

RegisteredModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModel;

RegisteredModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModel;

RegisteredModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RegisteredModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RegisteredModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RegisteredModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RegisteredModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RegisteredModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliases">aliases</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference">RegisteredModelProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput">aliasesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput">browseOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdByInput">createdByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput">fullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput">storageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput">updatedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliases"></a>

```java
public RegisteredModelAliasesList getAliases();
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfig"></a>

```java
public RegisteredModelProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference">RegisteredModelProviderConfigOutputReference</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput"></a>

```java
public IResolvable|java.util.List<RegisteredModelAliases> getAliasesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput"></a>

```java
public java.lang.Number getCreatedAtInput();
```

- *Type:* java.lang.Number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdByInput"></a>

```java
public java.lang.String getCreatedByInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput"></a>

```java
public java.lang.String getFullNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.providerConfigInput"></a>

```java
public RegisteredModelProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput"></a>

```java
public java.lang.String getStorageLocationInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput"></a>

```java
public java.lang.Number getUpdatedAtInput();
```

- *Type:* java.lang.Number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput"></a>

```java
public java.lang.String getUpdatedByInput();
```

- *Type:* java.lang.String

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredModelAliases <a name="RegisteredModelAliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelAliases;

RegisteredModelAliases.builder()
//  .aliasName(java.lang.String)
//  .catalogName(java.lang.String)
//  .id(java.lang.String)
//  .modelName(java.lang.String)
//  .schemaName(java.lang.String)
//  .versionNum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#model_name RegisteredModel#model_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum">versionNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#version_num RegisteredModel#version_num}. |

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#model_name RegisteredModel#model_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `versionNum`<sup>Optional</sup> <a name="versionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum"></a>

```java
public java.lang.Number getVersionNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#version_num RegisteredModel#version_num}.

---

### RegisteredModelConfig <a name="RegisteredModelConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelConfig;

RegisteredModelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .aliases(IResolvable|java.util.List<RegisteredModelAliases>)
//  .browseOnly(java.lang.Boolean|IResolvable)
//  .catalogName(java.lang.String)
//  .comment(java.lang.String)
//  .createdAt(java.lang.Number)
//  .createdBy(java.lang.String)
//  .fullName(java.lang.String)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .providerConfig(RegisteredModelProviderConfig)
//  .schemaName(java.lang.String)
//  .storageLocation(java.lang.String)
//  .updatedAt(java.lang.Number)
//  .updatedBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases">aliases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>></code> | aliases block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly">browseOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#comment RegisteredModel#comment}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_at RegisteredModel#created_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_by RegisteredModel#created_by}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName">fullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#full_name RegisteredModel#full_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#name RegisteredModel#name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#owner RegisteredModel#owner}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation">storageLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases"></a>

```java
public IResolvable|java.util.List<RegisteredModelAliases> getAliases();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#aliases RegisteredModel#aliases}

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly"></a>

```java
public java.lang.Boolean|IResolvable getBrowseOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#comment RegisteredModel#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_at RegisteredModel#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#created_by RegisteredModel#created_by}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#full_name RegisteredModel#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#name RegisteredModel#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#owner RegisteredModel#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.providerConfig"></a>

```java
public RegisteredModelProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#provider_config RegisteredModel#provider_config}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation"></a>

```java
public java.lang.String getStorageLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktn/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}.

---

### RegisteredModelProviderConfig <a name="RegisteredModelProviderConfig" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelProviderConfig;

RegisteredModelProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#workspace_id RegisteredModel#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/registered_model#workspace_id RegisteredModel#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredModelAliasesList <a name="RegisteredModelAliasesList" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelAliasesList;

new RegisteredModelAliasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get"></a>

```java
public RegisteredModelAliasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RegisteredModelAliases> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>>

---


### RegisteredModelAliasesOutputReference <a name="RegisteredModelAliasesOutputReference" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelAliasesOutputReference;

new RegisteredModelAliasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum">resetVersionNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasName` <a name="resetAliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName"></a>

```java
public void resetAliasName()
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetModelName` <a name="resetModelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName"></a>

```java
public void resetModelName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetVersionNum` <a name="resetVersionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum"></a>

```java
public void resetVersionNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput">versionNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum">versionNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `versionNumInput`<sup>Optional</sup> <a name="versionNumInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput"></a>

```java
public java.lang.Number getVersionNumInput();
```

- *Type:* java.lang.Number

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `versionNum`<sup>Required</sup> <a name="versionNum" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum"></a>

```java
public java.lang.Number getVersionNum();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue"></a>

```java
public IResolvable|RegisteredModelAliases getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>

---


### RegisteredModelProviderConfigOutputReference <a name="RegisteredModelProviderConfigOutputReference" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.registered_model.RegisteredModelProviderConfigOutputReference;

new RegisteredModelProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfigOutputReference.property.internalValue"></a>

```java
public RegisteredModelProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.registeredModel.RegisteredModelProviderConfig">RegisteredModelProviderConfig</a>

---



