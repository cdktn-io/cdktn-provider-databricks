# `dataClassificationCatalogConfig` Submodule <a name="`dataClassificationCatalogConfig` Submodule" id="@cdktn/provider-databricks.dataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClassificationCatalogConfig <a name="DataClassificationCatalogConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfig;

DataClassificationCatalogConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .autoTagConfigs(IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs>)
//  .includedSchemas(DataClassificationCatalogConfigIncludedSchemas)
//  .providerConfig(DataClassificationCatalogConfigProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.autoTagConfigs">autoTagConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}.

---

##### `autoTagConfigs`<sup>Optional</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.autoTagConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}.

---

##### `includedSchemas`<sup>Optional</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.includedSchemas"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs">putAutoTagConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas">putIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs">resetAutoTagConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas">resetIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoTagConfigs` <a name="putAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs"></a>

```java
public void putAutoTagConfigs(IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>>

---

##### `putIncludedSchemas` <a name="putIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas"></a>

```java
public void putIncludedSchemas(DataClassificationCatalogConfigIncludedSchemas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig"></a>

```java
public void putProviderConfig(DataClassificationCatalogConfigProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---

##### `resetAutoTagConfigs` <a name="resetAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs"></a>

```java
public void resetAutoTagConfigs()
```

##### `resetIncludedSchemas` <a name="resetIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas"></a>

```java
public void resetIncludedSchemas()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfig;

DataClassificationCatalogConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfig;

DataClassificationCatalogConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfig;

DataClassificationCatalogConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfig;

DataClassificationCatalogConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataClassificationCatalogConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataClassificationCatalogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs">autoTagConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput">autoTagConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput">includedSchemasInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoTagConfigs`<sup>Required</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs"></a>

```java
public DataClassificationCatalogConfigAutoTagConfigsList getAutoTagConfigs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `includedSchemas`<sup>Required</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas"></a>

```java
public DataClassificationCatalogConfigIncludedSchemasOutputReference getIncludedSchemas();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig"></a>

```java
public DataClassificationCatalogConfigProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `autoTagConfigsInput`<sup>Optional</sup> <a name="autoTagConfigsInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput"></a>

```java
public IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs> getAutoTagConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>>

---

##### `includedSchemasInput`<sup>Optional</sup> <a name="includedSchemasInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput"></a>

```java
public IResolvable|DataClassificationCatalogConfigIncludedSchemas getIncludedSchemasInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput"></a>

```java
public IResolvable|DataClassificationCatalogConfigProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataClassificationCatalogConfigAutoTagConfigs <a name="DataClassificationCatalogConfigAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigAutoTagConfigs;

DataClassificationCatalogConfigAutoTagConfigs.builder()
    .autoTaggingMode(java.lang.String)
    .classificationTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">autoTaggingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">classificationTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}. |

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```java
public java.lang.String getAutoTaggingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```java
public java.lang.String getClassificationTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}.

---

### DataClassificationCatalogConfigConfig <a name="DataClassificationCatalogConfigConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigConfig;

DataClassificationCatalogConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .autoTagConfigs(IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs>)
//  .includedSchemas(DataClassificationCatalogConfigIncludedSchemas)
//  .providerConfig(DataClassificationCatalogConfigProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs">autoTagConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas">includedSchemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}.

---

##### `autoTagConfigs`<sup>Optional</sup> <a name="autoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs"></a>

```java
public IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs> getAutoTagConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}.

---

##### `includedSchemas`<sup>Optional</sup> <a name="includedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas"></a>

```java
public DataClassificationCatalogConfigIncludedSchemas getIncludedSchemas();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig"></a>

```java
public DataClassificationCatalogConfigProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}.

---

### DataClassificationCatalogConfigIncludedSchemas <a name="DataClassificationCatalogConfigIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigIncludedSchemas;

DataClassificationCatalogConfigIncludedSchemas.builder()
    .names(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}.

---

### DataClassificationCatalogConfigProviderConfig <a name="DataClassificationCatalogConfigProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigProviderConfig;

DataClassificationCatalogConfigProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataClassificationCatalogConfigAutoTagConfigsList <a name="DataClassificationCatalogConfigAutoTagConfigsList" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigAutoTagConfigsList;

new DataClassificationCatalogConfigAutoTagConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```java
public DataClassificationCatalogConfigAutoTagConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataClassificationCatalogConfigAutoTagConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>>

---


### DataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataClassificationCatalogConfigAutoTagConfigsOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigAutoTagConfigsOutputReference;

new DataClassificationCatalogConfigAutoTagConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">autoTaggingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">classificationTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">autoTaggingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">classificationTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoTaggingModeInput`<sup>Optional</sup> <a name="autoTaggingModeInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```java
public java.lang.String getAutoTaggingModeInput();
```

- *Type:* java.lang.String

---

##### `classificationTagInput`<sup>Optional</sup> <a name="classificationTagInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```java
public java.lang.String getClassificationTagInput();
```

- *Type:* java.lang.String

---

##### `autoTaggingMode`<sup>Required</sup> <a name="autoTaggingMode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```java
public java.lang.String getAutoTaggingMode();
```

- *Type:* java.lang.String

---

##### `classificationTag`<sup>Required</sup> <a name="classificationTag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```java
public java.lang.String getClassificationTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataClassificationCatalogConfigAutoTagConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataClassificationCatalogConfigIncludedSchemasOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigIncludedSchemasOutputReference;

new DataClassificationCatalogConfigIncludedSchemasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">namesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```java
public java.util.List<java.lang.String> getNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```java
public IResolvable|DataClassificationCatalogConfigIncludedSchemas getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---


### DataClassificationCatalogConfigProviderConfigOutputReference <a name="DataClassificationCatalogConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_classification_catalog_config.DataClassificationCatalogConfigProviderConfigOutputReference;

new DataClassificationCatalogConfigProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataClassificationCatalogConfigProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---



