# `dataDatabricksDataQualityRefresh` Submodule <a name="`dataDatabricksDataQualityRefresh` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefresh <a name="DataDatabricksDataQualityRefresh" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefresh;

DataDatabricksDataQualityRefresh.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
    .refreshId(java.lang.Number)
//  .providerConfig(DataDatabricksDataQualityRefreshProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.refreshId">refreshId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.refreshId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksDataQualityRefreshProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefresh;

DataDatabricksDataQualityRefresh.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefresh;

DataDatabricksDataQualityRefresh.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefresh;

DataDatabricksDataQualityRefresh.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefresh;

DataDatabricksDataQualityRefresh.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksDataQualityRefresh.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksDataQualityRefresh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksDataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs">endTimeMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs">startTimeMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput">refreshIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId">refreshId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `endTimeMs`<sup>Required</sup> <a name="endTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs"></a>

```java
public java.lang.Number getEndTimeMs();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfig"></a>

```java
public DataDatabricksDataQualityRefreshProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference">DataDatabricksDataQualityRefreshProviderConfigOutputReference</a>

---

##### `startTimeMs`<sup>Required</sup> <a name="startTimeMs" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs"></a>

```java
public java.lang.Number getStartTimeMs();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksDataQualityRefreshProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---

##### `refreshIdInput`<sup>Optional</sup> <a name="refreshIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput"></a>

```java
public java.lang.Number getRefreshIdInput();
```

- *Type:* java.lang.Number

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId"></a>

```java
public java.lang.Number getRefreshId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshConfig <a name="DataDatabricksDataQualityRefreshConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefreshConfig;

DataDatabricksDataQualityRefreshConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
    .refreshId(java.lang.Number)
//  .providerConfig(DataDatabricksDataQualityRefreshProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId">refreshId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId"></a>

```java
public java.lang.Number getRefreshId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.providerConfig"></a>

```java
public DataDatabricksDataQualityRefreshProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#provider_config DataDatabricksDataQualityRefresh#provider_config}.

---

### DataDatabricksDataQualityRefreshProviderConfig <a name="DataDatabricksDataQualityRefreshProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefreshProviderConfig;

DataDatabricksDataQualityRefreshProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/data_quality_refresh#workspace_id DataDatabricksDataQualityRefresh#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshProviderConfigOutputReference <a name="DataDatabricksDataQualityRefreshProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_data_quality_refresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference;

new DataDatabricksDataQualityRefreshProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityRefreshProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshProviderConfig">DataDatabricksDataQualityRefreshProviderConfig</a>

---



