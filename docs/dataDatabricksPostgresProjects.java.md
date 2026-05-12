# `dataDatabricksPostgresProjects` Submodule <a name="`dataDatabricksPostgresProjects` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProjects <a name="DataDatabricksPostgresProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects databricks_postgres_projects}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjects;

DataDatabricksPostgresProjects.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresProjectsProviderConfig)
//  .showDeleted(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.showDeleted">showDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

##### `showDeleted`<sup>Optional</sup> <a name="showDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.showDeleted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted">resetShowDeleted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresProjectsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetShowDeleted` <a name="resetShowDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted"></a>

```java
public void resetShowDeleted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjects;

DataDatabricksPostgresProjects.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjects;

DataDatabricksPostgresProjects.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjects;

DataDatabricksPostgresProjects.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjects;

DataDatabricksPostgresProjects.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresProjects.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresProjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresProjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects">projects</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput">showDeletedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted">showDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects"></a>

```java
public DataDatabricksPostgresProjectsProjectsList getProjects();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig"></a>

```java
public DataDatabricksPostgresProjectsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---

##### `showDeletedInput`<sup>Optional</sup> <a name="showDeletedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput"></a>

```java
public java.lang.Boolean|IResolvable getShowDeletedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `showDeleted`<sup>Required</sup> <a name="showDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted"></a>

```java
public java.lang.Boolean|IResolvable getShowDeleted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectsConfig <a name="DataDatabricksPostgresProjectsConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsConfig;

DataDatabricksPostgresProjectsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresProjectsProviderConfig)
//  .showDeleted(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted">showDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresProjectsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

##### `showDeleted`<sup>Optional</sup> <a name="showDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted"></a>

```java
public java.lang.Boolean|IResolvable getShowDeleted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}.

---

### DataDatabricksPostgresProjectsProjects <a name="DataDatabricksPostgresProjectsProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjects;

DataDatabricksPostgresProjectsProjects.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresProjectsProjectsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig"></a>

```java
public DataDatabricksPostgresProjectsProjectsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpec <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec;

DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.builder()
//  .group(DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group"></a>

```java
public DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup;

DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
//  .enableReadableSecondaries(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectsProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsProviderConfig;

DataDatabricksPostgresProjectsProjectsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

### DataDatabricksPostgresProjectsProjectsSpec <a name="DataDatabricksPostgresProjectsProjectsSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpec;

DataDatabricksPostgresProjectsProjectsSpec.builder()
//  .budgetPolicyId(java.lang.String)
//  .customTags(IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsSpecCustomTags>)
//  .defaultBranch(java.lang.String)
//  .defaultEndpointSettings(DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings)
//  .displayName(java.lang.String)
//  .enablePgNativeLogin(java.lang.Boolean|IResolvable)
//  .historyRetentionDuration(java.lang.String)
//  .pgVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags">customTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}.

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsSpecCustomTags> getCustomTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}.

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}.

---

##### `defaultEndpointSettings`<sup>Optional</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}.

---

##### `enablePgNativeLogin`<sup>Optional</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}.

---

##### `historyRetentionDuration`<sup>Optional</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}.

---

##### `pgVersion`<sup>Optional</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}.

---

### DataDatabricksPostgresProjectsProjectsSpecCustomTags <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecCustomTags;

DataDatabricksPostgresProjectsProjectsSpecCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings;

DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.builder()
//  .autoscalingLimitMaxCu(java.lang.Number)
//  .autoscalingLimitMinCu(java.lang.Number)
//  .noSuspension(java.lang.Boolean|IResolvable)
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTimeoutDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProjectsStatus <a name="DataDatabricksPostgresProjectsProjectsStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatus;

DataDatabricksPostgresProjectsProjectsStatus.builder()
    .build();
```


### DataDatabricksPostgresProjectsProjectsStatusCustomTags <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusCustomTags;

DataDatabricksPostgresProjectsProjectsStatusCustomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings;

DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.builder()
//  .autoscalingLimitMaxCu(java.lang.Number)
//  .autoscalingLimitMinCu(java.lang.Number)
//  .noSuspension(java.lang.Boolean|IResolvable)
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTimeoutDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProviderConfig;

DataDatabricksPostgresProjectsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference;

new DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```java
public void resetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondariesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---


### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference;

new DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup"></a>

```java
public void putGroup(DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup"></a>

```java
public void resetGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput">groupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group"></a>

```java
public DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup getGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjectsInitialEndpointSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectsProjectsList <a name="DataDatabricksPostgresProjectsProjectsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsList;

new DataDatabricksPostgresProjectsProjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get"></a>

```java
public DataDatabricksPostgresProjectsProjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresProjectsProjects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>>

---


### DataDatabricksPostgresProjectsProjectsOutputReference <a name="DataDatabricksPostgresProjectsProjectsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsOutputReference;

new DataDatabricksPostgresProjectsProjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresProjectsProjectsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec">initialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime">purgeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `initialEndpointSpec`<sup>Required</sup> <a name="initialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec"></a>

```java
public DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference getInitialEndpointSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig"></a>

```java
public DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a>

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime"></a>

```java
public java.lang.String getPurgeTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjects getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>

---


### DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference;

new DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList;

new DataDatabricksPostgresProjectsProjectsSpecCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsSpecCustomTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>>

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference;

new DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsSpecCustomTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>

---


### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference;

new DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```java
public void resetAutoscalingLimitMaxCu()
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```java
public void resetAutoscalingLimitMinCu()
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```java
public void resetNoSuspension()
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```java
public void resetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCuInput();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMinCuInput();
```

- *Type:* java.lang.Number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```java
public java.lang.String getSuspendTimeoutDurationInput();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectsProjectsSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsSpecOutputReference;

new DataDatabricksPostgresProjectsProjectsSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags">putCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings">putDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings">resetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin">resetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration">resetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion">resetPgVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomTags` <a name="putCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags"></a>

```java
public void putCustomTags(IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsSpecCustomTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>>

---

##### `putDefaultEndpointSettings` <a name="putDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings"></a>

```java
public void putDefaultEndpointSettings(DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetDefaultEndpointSettings` <a name="resetDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings"></a>

```java
public void resetDefaultEndpointSettings()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablePgNativeLogin` <a name="resetEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin"></a>

```java
public void resetEnablePgNativeLogin()
```

##### `resetHistoryRetentionDuration` <a name="resetHistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration"></a>

```java
public void resetHistoryRetentionDuration()
```

##### `resetPgVersion` <a name="resetPgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion"></a>

```java
public void resetPgVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput">defaultEndpointSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput">enablePgNativeLoginInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput">historyRetentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput">pgVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpecCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a>

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsSpecCustomTags> getCustomTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags">DataDatabricksPostgresProjectsProjectsSpecCustomTags</a>>

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `defaultEndpointSettingsInput`<sup>Optional</sup> <a name="defaultEndpointSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings getDefaultEndpointSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLoginInput`<sup>Optional</sup> <a name="enablePgNativeLoginInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLoginInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDurationInput`<sup>Optional</sup> <a name="historyRetentionDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput"></a>

```java
public java.lang.String getHistoryRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `pgVersionInput`<sup>Optional</sup> <a name="pgVersionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput"></a>

```java
public java.lang.Number getPgVersionInput();
```

- *Type:* java.lang.Number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnablePgNativeLogin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjectsSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a>

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList;

new DataDatabricksPostgresProjectsProjectsStatusCustomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresProjectsProjectsStatusCustomTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>>

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference;

new DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusCustomTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>

---


### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference;

new DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```java
public void resetAutoscalingLimitMaxCu()
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```java
public void resetAutoscalingLimitMinCu()
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```java
public void resetNoSuspension()
```

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```java
public void resetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCuInput();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMinCuInput();
```

- *Type:* java.lang.Number

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```java
public java.lang.String getSuspendTimeoutDurationInput();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectsProjectsStatusOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProjectsStatusOutputReference;

new DataDatabricksPostgresProjectsProjectsStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes">branchLogicalSizeLimitBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings">defaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration">historyRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion">pgVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes">syntheticStorageSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchLogicalSizeLimitBytes`<sup>Required</sup> <a name="branchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```java
public java.lang.Number getBranchLogicalSizeLimitBytes();
```

- *Type:* java.lang.Number

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusCustomTagsList getCustomTags();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a>

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `defaultEndpointSettings`<sup>Required</sup> <a name="defaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference getDefaultEndpointSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin"></a>

```java
public IResolvable getEnablePgNativeLogin();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `historyRetentionDuration`<sup>Required</sup> <a name="historyRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration"></a>

```java
public java.lang.String getHistoryRetentionDuration();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion"></a>

```java
public java.lang.Number getPgVersion();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `syntheticStorageSizeBytes`<sup>Required</sup> <a name="syntheticStorageSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```java
public java.lang.Number getSyntheticStorageSizeBytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresProjectsProjectsStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a>

---


### DataDatabricksPostgresProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_projects.DataDatabricksPostgresProjectsProviderConfigOutputReference;

new DataDatabricksPostgresProjectsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresProjectsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---



