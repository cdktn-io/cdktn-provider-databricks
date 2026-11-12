# `dataDatabricksLakewatchDatasources` Submodule <a name="`dataDatabricksLakewatchDatasources` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasources <a name="DataDatabricksLakewatchDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasources;

DataDatabricksLakewatchDatasources.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
//  .filter(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksLakewatchDatasourcesProviderConfig)
//  .schemaName(java.lang.String)
//  .view(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.view"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksLakewatchDatasourcesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasources;

DataDatabricksLakewatchDatasources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasources;

DataDatabricksLakewatchDatasources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasources;

DataDatabricksLakewatchDatasources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasources;

DataDatabricksLakewatchDatasources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksLakewatchDatasources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksLakewatchDatasources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksLakewatchDatasources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources">datasources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput">viewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view">view</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesList getDatasources();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourcesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput"></a>

```java
public java.lang.String getViewInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourcesConfig <a name="DataDatabricksLakewatchDatasourcesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesConfig;

DataDatabricksLakewatchDatasourcesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
//  .filter(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksLakewatchDatasourcesProviderConfig)
//  .schemaName(java.lang.String)
//  .view(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourcesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

### DataDatabricksLakewatchDatasourcesDatasources <a name="DataDatabricksLakewatchDatasourcesDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasources;

DataDatabricksLakewatchDatasourcesDatasources.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloader <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.builder()
    .format(java.lang.String)
    .location(java.lang.String)
    .rawTable(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable)
//  .awsSecretScope(java.lang.String)
//  .envelope(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope)
//  .formatOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .includeExistingFiles(java.lang.Boolean|IResolvable)
//  .overridePartitionColumns(java.util.List<java.lang.String>)
//  .queueUrl(java.lang.String)
//  .serviceCredentials(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.builder()
//  .cloudWatchLogs(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs)
//  .jsonArray(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.builder()
//  .headerRetention(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable;

DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy;

DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesExistingTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable;

DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.builder()
    .name(java.lang.String)
//  .catalog(java.lang.String)
//  .includeExistingRows(java.lang.Boolean|IResolvable)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesOwner <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner;

DataDatabricksLakewatchDatasourcesDatasourcesOwner.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsers <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers;

DataDatabricksLakewatchDatasourcesDatasourcesParsers.builder()
    .id(java.lang.String)
    .version(java.lang.String)
//  .targetTable(DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable;

DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable;

DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig;

DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesSchedule <a name="DataDatabricksLakewatchDatasourcesDatasourcesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule;

DataDatabricksLakewatchDatasourcesDatasourcesSchedule.builder()
//  .atLeastEvery(java.lang.String)
//  .computeGroup(java.lang.String)
//  .continuous(java.lang.Boolean|IResolvable)
//  .cronExpression(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesStatus <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus;

DataDatabricksLakewatchDatasourcesDatasourcesStatus.builder()
    .build();
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob;

DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob.builder()
    .build();
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline;

DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline.builder()
    .build();
```


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection;

DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.builder()
    .connectionName(java.lang.String)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy;

DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesProviderConfig;

DataDatabricksLakewatchDatasourcesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```java
public void resetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetentionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```java
public void putCloudWatchLogs(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```java
public void putJsonArray(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```java
public void resetCloudWatchLogs()
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```java
public void resetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray getJsonArrayInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope"></a>

```java
public void putEnvelope(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable"></a>

```java
public void putRawTable(DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope"></a>

```java
public void resetAwsSecretScope()
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope"></a>

```java
public void resetEnvelope()
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions"></a>

```java
public void resetFormatOptions()
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```java
public void resetIncludeExistingFiles()
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```java
public void resetOverridePartitionColumns()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials"></a>

```java
public void resetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```java
public IResolvable getEffectiveIncludeExistingFiles();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference getEffectiveRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```java
public java.lang.String getAwsSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope getEnvelopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFilesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable getRawTableInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```java
public java.lang.String getServiceCredentialsInput();
```

- *Type:* java.lang.String

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows"></a>

```java
public void resetIncludeExistingRows()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog"></a>

```java
public java.lang.String getEffectiveCatalog();
```

- *Type:* java.lang.String

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName"></a>

```java
public java.lang.String getEffectiveName();
```

- *Type:* java.lang.String

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema"></a>

```java
public java.lang.String getEffectiveSchema();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRowsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesExistingTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesList <a name="DataDatabricksLakewatchDatasourcesDatasourcesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesList;

new DataDatabricksLakewatchDatasourcesDatasourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksLakewatchDatasourcesDatasources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>>

---


### DataDatabricksLakewatchDatasourcesDatasourcesOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode">computeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId">datasourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName">datasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference getAutoloader();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode"></a>

```java
public java.lang.String getComputeMode();
```

- *Type:* java.lang.String

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId"></a>

```java
public java.lang.String getComputeWorkspaceId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId"></a>

```java
public java.lang.String getDatasourceId();
```

- *Type:* java.lang.String

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName"></a>

```java
public java.lang.String getDatasourceName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName"></a>

```java
public java.lang.String getEffectiveCatalogName();
```

- *Type:* java.lang.String

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName"></a>

```java
public java.lang.String getEffectiveDatasourceName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal"></a>

```java
public java.lang.String getEffectiveRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName"></a>

```java
public java.lang.String getEffectiveSchemaName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference getExistingTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersList getParsers();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a>

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference getUnityCatalogConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference getUpdatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesOwner getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersList <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList;

new DataDatabricksLakewatchDatasourcesDatasourcesParsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksLakewatchDatasourcesDatasourcesParsers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable"></a>

```java
public void putTargetTable(DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable"></a>

```java
public void resetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference getEffectiveTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable getTargetTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesParsers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery"></a>

```java
public void resetAtLeastEvery()
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup"></a>

```java
public void resetComputeGroup()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput"></a>

```java
public java.lang.String getAtLeastEveryInput();
```

- *Type:* java.lang.String

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput"></a>

```java
public java.lang.String getComputeGroupInput();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference getIngestionJob();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference getIngestionPipeline();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```java
public java.lang.String getEffectiveStartTime();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference;

new DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a>

---


### DataDatabricksLakewatchDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference;

new DataDatabricksLakewatchDatasourcesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourcesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---



