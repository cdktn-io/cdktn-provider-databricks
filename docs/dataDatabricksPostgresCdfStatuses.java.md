# `dataDatabricksPostgresCdfStatuses` Submodule <a name="`dataDatabricksPostgresCdfStatuses` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresCdfStatuses <a name="DataDatabricksPostgresCdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses databricks_postgres_cdf_statuses}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatuses;

DataDatabricksPostgresCdfStatuses.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresCdfStatusesProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresCdfStatusesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresCdfStatuses resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatuses;

DataDatabricksPostgresCdfStatuses.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatuses;

DataDatabricksPostgresCdfStatuses.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatuses;

DataDatabricksPostgresCdfStatuses.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatuses;

DataDatabricksPostgresCdfStatuses.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresCdfStatuses.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresCdfStatuses resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresCdfStatuses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresCdfStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresCdfStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdfStatuses">cdfStatuses</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList">DataDatabricksPostgresCdfStatusesCdfStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `cdfStatuses`<sup>Required</sup> <a name="cdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdfStatuses"></a>

```java
public DataDatabricksPostgresCdfStatusesCdfStatusesList getCdfStatuses();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList">DataDatabricksPostgresCdfStatusesCdfStatusesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfig"></a>

```java
public DataDatabricksPostgresCdfStatusesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresCdfStatusesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresCdfStatusesCdfStatuses <a name="DataDatabricksPostgresCdfStatusesCdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesCdfStatuses;

DataDatabricksPostgresCdfStatusesCdfStatuses.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#name DataDatabricksPostgresCdfStatuses#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#name DataDatabricksPostgresCdfStatuses#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.providerConfig"></a>

```java
public DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}.

---

### DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig <a name="DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig;

DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}.

---

### DataDatabricksPostgresCdfStatusesConfig <a name="DataDatabricksPostgresCdfStatusesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesConfig;

DataDatabricksPostgresCdfStatusesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresCdfStatusesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresCdfStatusesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}.

---

### DataDatabricksPostgresCdfStatusesProviderConfig <a name="DataDatabricksPostgresCdfStatusesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesProviderConfig;

DataDatabricksPostgresCdfStatusesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresCdfStatusesCdfStatusesList <a name="DataDatabricksPostgresCdfStatusesCdfStatusesList" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesCdfStatusesList;

new DataDatabricksPostgresCdfStatusesCdfStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get"></a>

```java
public DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresCdfStatusesCdfStatuses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>>

---


### DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference <a name="DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference;

new DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.committedLsn">committedLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.lastSyncTime">lastSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.postgresTable">postgresTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.statusDetail">statusDetail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.ucTable">ucTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `committedLsn`<sup>Required</sup> <a name="committedLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.committedLsn"></a>

```java
public java.lang.String getCommittedLsn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.lastSyncTime"></a>

```java
public java.lang.String getLastSyncTime();
```

- *Type:* java.lang.String

---

##### `postgresTable`<sup>Required</sup> <a name="postgresTable" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.postgresTable"></a>

```java
public java.lang.String getPostgresTable();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `statusDetail`<sup>Required</sup> <a name="statusDetail" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.statusDetail"></a>

```java
public java.lang.String getStatusDetail();
```

- *Type:* java.lang.String

---

##### `ucTable`<sup>Required</sup> <a name="ucTable" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.ucTable"></a>

```java
public java.lang.String getUcTable();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresCdfStatusesCdfStatuses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>

---


### DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference <a name="DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference;

new DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---


### DataDatabricksPostgresCdfStatusesProviderConfigOutputReference <a name="DataDatabricksPostgresCdfStatusesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_cdf_statuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference;

new DataDatabricksPostgresCdfStatusesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresCdfStatusesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---



