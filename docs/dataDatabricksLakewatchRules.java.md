# `dataDatabricksLakewatchRules` Submodule <a name="`dataDatabricksLakewatchRules` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRules <a name="DataDatabricksLakewatchRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules databricks_lakewatch_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRules;

DataDatabricksLakewatchRules.Builder.create(Construct scope, java.lang.String id)
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
//  .providerConfig(DataDatabricksLakewatchRulesProviderConfig)
//  .schemaName(java.lang.String)
//  .view(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.view"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksLakewatchRulesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRules;

DataDatabricksLakewatchRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRules;

DataDatabricksLakewatchRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRules;

DataDatabricksLakewatchRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRules;

DataDatabricksLakewatchRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksLakewatchRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksLakewatchRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksLakewatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput">viewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view">view</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig"></a>

```java
public DataDatabricksLakewatchRulesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules"></a>

```java
public DataDatabricksLakewatchRulesRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput"></a>

```java
public java.lang.String getViewInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRulesConfig <a name="DataDatabricksLakewatchRulesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesConfig;

DataDatabricksLakewatchRulesConfig.builder()
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
//  .providerConfig(DataDatabricksLakewatchRulesProviderConfig)
//  .schemaName(java.lang.String)
//  .view(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig"></a>

```java
public DataDatabricksLakewatchRulesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}.

---

### DataDatabricksLakewatchRulesProviderConfig <a name="DataDatabricksLakewatchRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesProviderConfig;

DataDatabricksLakewatchRulesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRules <a name="DataDatabricksLakewatchRulesRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRules;

DataDatabricksLakewatchRulesRules.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksLakewatchRulesRulesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig"></a>

```java
public DataDatabricksLakewatchRulesRulesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

### DataDatabricksLakewatchRulesRulesBatch <a name="DataDatabricksLakewatchRulesRulesBatch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatch;

DataDatabricksLakewatchRulesRulesBatch.builder()
//  .custom(DataDatabricksLakewatchRulesRulesBatchCustom)
//  .sql(DataDatabricksLakewatchRulesRulesBatchSql)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom"></a>

```java
public DataDatabricksLakewatchRulesRulesBatchCustom getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql"></a>

```java
public DataDatabricksLakewatchRulesRulesBatchSql getSql();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}.

---

### DataDatabricksLakewatchRulesRulesBatchCustom <a name="DataDatabricksLakewatchRulesRulesBatchCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatchCustom;

DataDatabricksLakewatchRulesRulesBatchCustom.builder()
    .notebook(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook">notebook</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook"></a>

```java
public java.lang.String getNotebook();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}.

---

### DataDatabricksLakewatchRulesRulesBatchSql <a name="DataDatabricksLakewatchRulesRulesBatchSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatchSql;

DataDatabricksLakewatchRulesRulesBatchSql.builder()
    .query(java.lang.String)
//  .defaultCatalogName(java.lang.String)
//  .defaultSchemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName">defaultCatalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName">defaultSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}.

---

##### `defaultCatalogName`<sup>Optional</sup> <a name="defaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName"></a>

```java
public java.lang.String getDefaultCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}.

---

##### `defaultSchemaName`<sup>Optional</sup> <a name="defaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName"></a>

```java
public java.lang.String getDefaultSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}.

---

### DataDatabricksLakewatchRulesRulesCreatedBy <a name="DataDatabricksLakewatchRulesRulesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesCreatedBy;

DataDatabricksLakewatchRulesRulesCreatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesMitre <a name="DataDatabricksLakewatchRulesRulesMitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesMitre;

DataDatabricksLakewatchRulesRulesMitre.builder()
//  .subTechnique(java.lang.String)
//  .subTechniqueId(java.lang.String)
//  .tactic(java.lang.String)
//  .taxonomy(java.lang.String)
//  .technique(java.lang.String)
//  .techniqueId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique">subTechnique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId">subTechniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic">tactic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique">technique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId">techniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}. |

---

##### `subTechnique`<sup>Optional</sup> <a name="subTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique"></a>

```java
public java.lang.String getSubTechnique();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}.

---

##### `subTechniqueId`<sup>Optional</sup> <a name="subTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId"></a>

```java
public java.lang.String getSubTechniqueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}.

---

##### `tactic`<sup>Optional</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic"></a>

```java
public java.lang.String getTactic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}.

---

##### `taxonomy`<sup>Optional</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}.

---

##### `techniqueId`<sup>Optional</sup> <a name="techniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId"></a>

```java
public java.lang.String getTechniqueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}.

---

### DataDatabricksLakewatchRulesRulesOriginalContentPack <a name="DataDatabricksLakewatchRulesRulesOriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOriginalContentPack;

DataDatabricksLakewatchRulesRulesOriginalContentPack.builder()
    .build();
```


### DataDatabricksLakewatchRulesRulesOutput <a name="DataDatabricksLakewatchRulesRulesOutput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOutput;

DataDatabricksLakewatchRulesRulesOutput.builder()
//  .context(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultContext(java.lang.Boolean|IResolvable)
//  .eventTimeColumn(java.lang.String)
//  .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext">defaultContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn">eventTimeColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}.

---

##### `defaultContext`<sup>Optional</sup> <a name="defaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}.

---

##### `eventTimeColumn`<sup>Optional</sup> <a name="eventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn"></a>

```java
public java.lang.String getEventTimeColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}.

---

### DataDatabricksLakewatchRulesRulesOwner <a name="DataDatabricksLakewatchRulesRulesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOwner;

DataDatabricksLakewatchRulesRulesOwner.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesProviderConfig <a name="DataDatabricksLakewatchRulesRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesProviderConfig;

DataDatabricksLakewatchRulesRulesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRulesSchedule <a name="DataDatabricksLakewatchRulesRulesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesSchedule;

DataDatabricksLakewatchRulesRulesSchedule.builder()
//  .atLeastEvery(java.lang.String)
//  .continuous(java.lang.Boolean|IResolvable)
//  .cronExpression(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}.

---

### DataDatabricksLakewatchRulesRulesStatus <a name="DataDatabricksLakewatchRulesRulesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesStatus;

DataDatabricksLakewatchRulesRulesStatus.builder()
    .build();
```


### DataDatabricksLakewatchRulesRulesTimerange <a name="DataDatabricksLakewatchRulesRulesTimerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesTimerange;

DataDatabricksLakewatchRulesRulesTimerange.builder()
//  .extendLookback(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback">extendLookback</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}. |

---

##### `extendLookback`<sup>Optional</sup> <a name="extendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback"></a>

```java
public java.lang.String getExtendLookback();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}.

---

### DataDatabricksLakewatchRulesRulesUpdatedBy <a name="DataDatabricksLakewatchRulesRulesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesUpdatedBy;

DataDatabricksLakewatchRulesRulesUpdatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesProviderConfigOutputReference;

new DataDatabricksLakewatchRulesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---


### DataDatabricksLakewatchRulesRulesBatchCustomOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference;

new DataDatabricksLakewatchRulesRulesBatchCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput">notebookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook">notebook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput"></a>

```java
public java.lang.String getNotebookInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook"></a>

```java
public java.lang.String getNotebook();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesBatchCustom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---


### DataDatabricksLakewatchRulesRulesBatchOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatchOutputReference;

new DataDatabricksLakewatchRulesRulesBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom"></a>

```java
public void putCustom(DataDatabricksLakewatchRulesRulesBatchCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---

##### `putSql` <a name="putSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql"></a>

```java
public void putSql(DataDatabricksLakewatchRulesRulesBatchSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetSql` <a name="resetSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql"></a>

```java
public void resetSql()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput">sqlInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom"></a>

```java
public DataDatabricksLakewatchRulesRulesBatchCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql"></a>

```java
public DataDatabricksLakewatchRulesRulesBatchSqlOutputReference getSql();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesBatchCustom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesBatchSql getSqlInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesBatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a>

---


### DataDatabricksLakewatchRulesRulesBatchSqlOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchSqlOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference;

new DataDatabricksLakewatchRulesRulesBatchSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName">resetDefaultCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName">resetDefaultSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultCatalogName` <a name="resetDefaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName"></a>

```java
public void resetDefaultCatalogName()
```

##### `resetDefaultSchemaName` <a name="resetDefaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName"></a>

```java
public void resetDefaultSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput">defaultCatalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput">defaultSchemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName">defaultCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName">defaultSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultCatalogNameInput`<sup>Optional</sup> <a name="defaultCatalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```java
public java.lang.String getDefaultCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `defaultSchemaNameInput`<sup>Optional</sup> <a name="defaultSchemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```java
public java.lang.String getDefaultSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `defaultCatalogName`<sup>Required</sup> <a name="defaultCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName"></a>

```java
public java.lang.String getDefaultCatalogName();
```

- *Type:* java.lang.String

---

##### `defaultSchemaName`<sup>Required</sup> <a name="defaultSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName"></a>

```java
public java.lang.String getDefaultSchemaName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesBatchSql getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---


### DataDatabricksLakewatchRulesRulesCreatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference;

new DataDatabricksLakewatchRulesRulesCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a>

---


### DataDatabricksLakewatchRulesRulesList <a name="DataDatabricksLakewatchRulesRulesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesList;

new DataDatabricksLakewatchRulesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get"></a>

```java
public DataDatabricksLakewatchRulesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksLakewatchRulesRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>>

---


### DataDatabricksLakewatchRulesRulesMitreList <a name="DataDatabricksLakewatchRulesRulesMitreList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesMitreList;

new DataDatabricksLakewatchRulesRulesMitreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get"></a>

```java
public DataDatabricksLakewatchRulesRulesMitreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksLakewatchRulesRulesMitre> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>>

---


### DataDatabricksLakewatchRulesRulesMitreOutputReference <a name="DataDatabricksLakewatchRulesRulesMitreOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesMitreOutputReference;

new DataDatabricksLakewatchRulesRulesMitreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique">resetSubTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId">resetSubTechniqueId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic">resetTactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy">resetTaxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique">resetTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId">resetTechniqueId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubTechnique` <a name="resetSubTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique"></a>

```java
public void resetSubTechnique()
```

##### `resetSubTechniqueId` <a name="resetSubTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId"></a>

```java
public void resetSubTechniqueId()
```

##### `resetTactic` <a name="resetTactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic"></a>

```java
public void resetTactic()
```

##### `resetTaxonomy` <a name="resetTaxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy"></a>

```java
public void resetTaxonomy()
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique"></a>

```java
public void resetTechnique()
```

##### `resetTechniqueId` <a name="resetTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId"></a>

```java
public void resetTechniqueId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput">subTechniqueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput">subTechniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput">tacticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput">taxonomyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput">techniqueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique">subTechnique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId">subTechniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic">tactic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique">technique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId">techniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subTechniqueIdInput`<sup>Optional</sup> <a name="subTechniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput"></a>

```java
public java.lang.String getSubTechniqueIdInput();
```

- *Type:* java.lang.String

---

##### `subTechniqueInput`<sup>Optional</sup> <a name="subTechniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput"></a>

```java
public java.lang.String getSubTechniqueInput();
```

- *Type:* java.lang.String

---

##### `tacticInput`<sup>Optional</sup> <a name="tacticInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput"></a>

```java
public java.lang.String getTacticInput();
```

- *Type:* java.lang.String

---

##### `taxonomyInput`<sup>Optional</sup> <a name="taxonomyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput"></a>

```java
public java.lang.String getTaxonomyInput();
```

- *Type:* java.lang.String

---

##### `techniqueIdInput`<sup>Optional</sup> <a name="techniqueIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput"></a>

```java
public java.lang.String getTechniqueIdInput();
```

- *Type:* java.lang.String

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput"></a>

```java
public java.lang.String getTechniqueInput();
```

- *Type:* java.lang.String

---

##### `subTechnique`<sup>Required</sup> <a name="subTechnique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique"></a>

```java
public java.lang.String getSubTechnique();
```

- *Type:* java.lang.String

---

##### `subTechniqueId`<sup>Required</sup> <a name="subTechniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId"></a>

```java
public java.lang.String getSubTechniqueId();
```

- *Type:* java.lang.String

---

##### `tactic`<sup>Required</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic"></a>

```java
public java.lang.String getTactic();
```

- *Type:* java.lang.String

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

---

##### `techniqueId`<sup>Required</sup> <a name="techniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId"></a>

```java
public java.lang.String getTechniqueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesMitre getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>

---


### DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference <a name="DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference;

new DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesOriginalContentPack getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a>

---


### DataDatabricksLakewatchRulesRulesOutputOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOutputOutputReference;

new DataDatabricksLakewatchRulesRulesOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext">resetDefaultContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn">resetEventTimeColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext"></a>

```java
public void resetContext()
```

##### `resetDefaultContext` <a name="resetDefaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext"></a>

```java
public void resetDefaultContext()
```

##### `resetEventTimeColumn` <a name="resetEventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn"></a>

```java
public void resetEventTimeColumn()
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary"></a>

```java
public void resetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput">contextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput">defaultContextInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput">eventTimeColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext">defaultContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn">eventTimeColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultContextInput`<sup>Optional</sup> <a name="defaultContextInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContextInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTimeColumnInput`<sup>Optional</sup> <a name="eventTimeColumnInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput"></a>

```java
public java.lang.String getEventTimeColumnInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultContext`<sup>Required</sup> <a name="defaultContext" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTimeColumn`<sup>Required</sup> <a name="eventTimeColumn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn"></a>

```java
public java.lang.String getEventTimeColumn();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a>

---


### DataDatabricksLakewatchRulesRulesOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOutputReference;

new DataDatabricksLakewatchRulesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksLakewatchRulesRulesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId">contentResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication">deduplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow">deduplicationTimeWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName">effectiveRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity">fidelity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre">mitre</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack">originalContentPack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references">references</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook">runbook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime">suppressUntilTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch"></a>

```java
public DataDatabricksLakewatchRulesRulesBatchOutputReference getBatch();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId"></a>

```java
public java.lang.String getComputeWorkspaceId();
```

- *Type:* java.lang.String

---

##### `contentResourceId`<sup>Required</sup> <a name="contentResourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId"></a>

```java
public java.lang.String getContentResourceId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy"></a>

```java
public DataDatabricksLakewatchRulesRulesCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deduplication`<sup>Required</sup> <a name="deduplication" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication"></a>

```java
public java.lang.String getDeduplication();
```

- *Type:* java.lang.String

---

##### `deduplicationTimeWindow`<sup>Required</sup> <a name="deduplicationTimeWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow"></a>

```java
public java.lang.String getDeduplicationTimeWindow();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName"></a>

```java
public java.lang.String getEffectiveCatalogName();
```

- *Type:* java.lang.String

---

##### `effectiveRuleName`<sup>Required</sup> <a name="effectiveRuleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName"></a>

```java
public java.lang.String getEffectiveRuleName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal"></a>

```java
public java.lang.String getEffectiveRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName"></a>

```java
public java.lang.String getEffectiveSchemaName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity"></a>

```java
public java.lang.String getFidelity();
```

- *Type:* java.lang.String

---

##### `mitre`<sup>Required</sup> <a name="mitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre"></a>

```java
public DataDatabricksLakewatchRulesRulesMitreList getMitre();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `originalContentPack`<sup>Required</sup> <a name="originalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack"></a>

```java
public DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference getOriginalContentPack();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output"></a>

```java
public DataDatabricksLakewatchRulesRulesOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner"></a>

```java
public DataDatabricksLakewatchRulesRulesOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksLakewatchRulesRulesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a>

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references"></a>

```java
public java.util.List<java.lang.String> getReferences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `runbook`<sup>Required</sup> <a name="runbook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook"></a>

```java
public java.lang.String getRunbook();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule"></a>

```java
public DataDatabricksLakewatchRulesRulesScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status"></a>

```java
public DataDatabricksLakewatchRulesRulesStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a>

---

##### `suppressUntilTime`<sup>Required</sup> <a name="suppressUntilTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime"></a>

```java
public java.lang.String getSuppressUntilTime();
```

- *Type:* java.lang.String

---

##### `timerange`<sup>Required</sup> <a name="timerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange"></a>

```java
public DataDatabricksLakewatchRulesRulesTimerangeOutputReference getTimerange();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy"></a>

```java
public DataDatabricksLakewatchRulesRulesUpdatedByOutputReference getUpdatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>

---


### DataDatabricksLakewatchRulesRulesOwnerOutputReference <a name="DataDatabricksLakewatchRulesRulesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesOwnerOutputReference;

new DataDatabricksLakewatchRulesRulesOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesOwner getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a>

---


### DataDatabricksLakewatchRulesRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference;

new DataDatabricksLakewatchRulesRulesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchRulesRulesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---


### DataDatabricksLakewatchRulesRulesScheduleOutputReference <a name="DataDatabricksLakewatchRulesRulesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesScheduleOutputReference;

new DataDatabricksLakewatchRulesRulesScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery"></a>

```java
public void resetAtLeastEvery()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput"></a>

```java
public java.lang.String getAtLeastEveryInput();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a>

---


### DataDatabricksLakewatchRulesRulesStatusOutputReference <a name="DataDatabricksLakewatchRulesRulesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesStatusOutputReference;

new DataDatabricksLakewatchRulesRulesStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a>

---


### DataDatabricksLakewatchRulesRulesTimerangeOutputReference <a name="DataDatabricksLakewatchRulesRulesTimerangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference;

new DataDatabricksLakewatchRulesRulesTimerangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback">resetExtendLookback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendLookback` <a name="resetExtendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback"></a>

```java
public void resetExtendLookback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput">extendLookbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback">extendLookback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendLookbackInput`<sup>Optional</sup> <a name="extendLookbackInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput"></a>

```java
public java.lang.String getExtendLookbackInput();
```

- *Type:* java.lang.String

---

##### `extendLookback`<sup>Required</sup> <a name="extendLookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback"></a>

```java
public java.lang.String getExtendLookback();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesTimerange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a>

---


### DataDatabricksLakewatchRulesRulesUpdatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_rules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference;

new DataDatabricksLakewatchRulesRulesUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchRulesRulesUpdatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a>

---



