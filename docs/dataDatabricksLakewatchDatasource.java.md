# `dataDatabricksLakewatchDatasource` Submodule <a name="`dataDatabricksLakewatchDatasource` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasource <a name="DataDatabricksLakewatchDatasource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasource;

DataDatabricksLakewatchDatasource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksLakewatchDatasourceProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksLakewatchDatasourceProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasource;

DataDatabricksLakewatchDatasource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasource;

DataDatabricksLakewatchDatasource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasource;

DataDatabricksLakewatchDatasource.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasource;

DataDatabricksLakewatchDatasource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksLakewatchDatasource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksLakewatchDatasource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksLakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode">computeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId">datasourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName">datasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName">effectiveDatasourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable">existingTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection">unityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderOutputReference getAutoloader();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `computeMode`<sup>Required</sup> <a name="computeMode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode"></a>

```java
public java.lang.String getComputeMode();
```

- *Type:* java.lang.String

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId"></a>

```java
public java.lang.String getComputeWorkspaceId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy"></a>

```java
public DataDatabricksLakewatchDatasourceCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId"></a>

```java
public java.lang.String getDatasourceId();
```

- *Type:* java.lang.String

---

##### `datasourceName`<sup>Required</sup> <a name="datasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName"></a>

```java
public java.lang.String getDatasourceName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName"></a>

```java
public java.lang.String getEffectiveCatalogName();
```

- *Type:* java.lang.String

---

##### `effectiveDatasourceName`<sup>Required</sup> <a name="effectiveDatasourceName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName"></a>

```java
public java.lang.String getEffectiveDatasourceName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```java
public java.lang.String getEffectiveRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName"></a>

```java
public java.lang.String getEffectiveSchemaName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `existingTable`<sup>Required</sup> <a name="existingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable"></a>

```java
public DataDatabricksLakewatchDatasourceExistingTableOutputReference getExistingTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner"></a>

```java
public DataDatabricksLakewatchDatasourceOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers"></a>

```java
public DataDatabricksLakewatchDatasourceParsersList getParsers();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourceProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a>

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule"></a>

```java
public DataDatabricksLakewatchDatasourceScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status"></a>

```java
public DataDatabricksLakewatchDatasourceStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a>

---

##### `unityCatalogConnection`<sup>Required</sup> <a name="unityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection"></a>

```java
public DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference getUnityCatalogConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy"></a>

```java
public DataDatabricksLakewatchDatasourceUpdatedByOutputReference getUpdatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceAutoloader <a name="DataDatabricksLakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloader;

DataDatabricksLakewatchDatasourceAutoloader.builder()
    .format(java.lang.String)
    .location(java.lang.String)
    .rawTable(DataDatabricksLakewatchDatasourceAutoloaderRawTable)
//  .awsSecretScope(java.lang.String)
//  .envelope(DataDatabricksLakewatchDatasourceAutoloaderEnvelope)
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}.

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderRawTable getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}.

---

##### `awsSecretScope`<sup>Optional</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelope getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}.

---

##### `includeExistingFiles`<sup>Optional</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}.

---

##### `overridePartitionColumns`<sup>Optional</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}.

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}.

---

##### `serviceCredentials`<sup>Optional</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable;

DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope;

DataDatabricksLakewatchDatasourceAutoloaderEnvelope.builder()
//  .cloudWatchLogs(DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs)
//  .jsonArray(DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}. |

---

##### `cloudWatchLogs`<sup>Optional</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}.

---

##### `jsonArray`<sup>Optional</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs;

DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.builder()
//  .headerRetention(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}. |

---

##### `headerRetention`<sup>Optional</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray;

DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}.

---

### DataDatabricksLakewatchDatasourceAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable;

DataDatabricksLakewatchDatasourceAutoloaderRawTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceConfig <a name="DataDatabricksLakewatchDatasourceConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceConfig;

DataDatabricksLakewatchDatasourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksLakewatchDatasourceProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig"></a>

```java
public DataDatabricksLakewatchDatasourceProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

### DataDatabricksLakewatchDatasourceCreatedBy <a name="DataDatabricksLakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceCreatedBy;

DataDatabricksLakewatchDatasourceCreatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceExistingTable <a name="DataDatabricksLakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceExistingTable;

DataDatabricksLakewatchDatasourceExistingTable.builder()
    .name(java.lang.String)
//  .catalog(java.lang.String)
//  .includeExistingRows(java.lang.Boolean|IResolvable)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}.

---

##### `includeExistingRows`<sup>Optional</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}.

---

### DataDatabricksLakewatchDatasourceOwner <a name="DataDatabricksLakewatchDatasourceOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceOwner;

DataDatabricksLakewatchDatasourceOwner.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceParsers <a name="DataDatabricksLakewatchDatasourceParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsers;

DataDatabricksLakewatchDatasourceParsers.builder()
    .id(java.lang.String)
    .version(java.lang.String)
//  .targetTable(DataDatabricksLakewatchDatasourceParsersTargetTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable"></a>

```java
public DataDatabricksLakewatchDatasourceParsersTargetTable getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}.

---

### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable;

DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceParsersTargetTable <a name="DataDatabricksLakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersTargetTable;

DataDatabricksLakewatchDatasourceParsersTargetTable.builder()
    .tableName(java.lang.String)
//  .catalogName(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceProviderConfig <a name="DataDatabricksLakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceProviderConfig;

DataDatabricksLakewatchDatasourceProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}.

---

### DataDatabricksLakewatchDatasourceSchedule <a name="DataDatabricksLakewatchDatasourceSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceSchedule;

DataDatabricksLakewatchDatasourceSchedule.builder()
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}.

---

##### `computeGroup`<sup>Optional</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}.

---

### DataDatabricksLakewatchDatasourceStatus <a name="DataDatabricksLakewatchDatasourceStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatus;

DataDatabricksLakewatchDatasourceStatus.builder()
    .build();
```


### DataDatabricksLakewatchDatasourceStatusIngestionJob <a name="DataDatabricksLakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatusIngestionJob;

DataDatabricksLakewatchDatasourceStatusIngestionJob.builder()
    .build();
```


### DataDatabricksLakewatchDatasourceStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline;

DataDatabricksLakewatchDatasourceStatusIngestionPipeline.builder()
    .build();
```


### DataDatabricksLakewatchDatasourceUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection;

DataDatabricksLakewatchDatasourceUnityCatalogConnection.builder()
    .connectionName(java.lang.String)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}.

---

### DataDatabricksLakewatchDatasourceUpdatedBy <a name="DataDatabricksLakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceUpdatedBy;

DataDatabricksLakewatchDatasourceUpdatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">resetHeaderRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRetention` <a name="resetHeaderRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```java
public void resetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">headerRetentionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">headerRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerRetentionInput`<sup>Optional</sup> <a name="headerRetentionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetentionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `headerRetention`<sup>Required</sup> <a name="headerRetention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">putCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">putJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">resetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">resetJsonArray</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLogs` <a name="putCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```java
public void putCloudWatchLogs(DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `putJsonArray` <a name="putJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```java
public void putJsonArray(DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `resetCloudWatchLogs` <a name="resetCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```java
public void resetCloudWatchLogs()
```

##### `resetJsonArray` <a name="resetJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```java
public void resetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">jsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloudWatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">jsonArrayInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogs`<sup>Required</sup> <a name="cloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference getCloudWatchLogs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `jsonArray`<sup>Required</sup> <a name="jsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference getJsonArray();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloudWatchLogsInput`<sup>Optional</sup> <a name="cloudWatchLogsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs getCloudWatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `jsonArrayInput`<sup>Optional</sup> <a name="jsonArrayInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray getJsonArrayInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope">putEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable">putRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">resetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope">resetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">resetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">resetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">resetServiceCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvelope` <a name="putEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```java
public void putEnvelope(DataDatabricksLakewatchDatasourceAutoloaderEnvelope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `putRawTable` <a name="putRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```java
public void putRawTable(DataDatabricksLakewatchDatasourceAutoloaderRawTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `resetAwsSecretScope` <a name="resetAwsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```java
public void resetAwsSecretScope()
```

##### `resetEnvelope` <a name="resetEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```java
public void resetEnvelope()
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```java
public void resetFormatOptions()
```

##### `resetIncludeExistingFiles` <a name="resetIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```java
public void resetIncludeExistingFiles()
```

##### `resetOverridePartitionColumns` <a name="resetOverridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```java
public void resetOverridePartitionColumns()
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```java
public void resetQueueUrl()
```

##### `resetServiceCredentials` <a name="resetServiceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```java
public void resetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effectiveIncludeExistingFiles</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable">rawTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">awsSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">includeExistingFilesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">overridePartitionColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">rawTableInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">serviceCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">awsSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions">formatOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">includeExistingFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">overridePartitionColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">serviceCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveIncludeExistingFiles`<sup>Required</sup> <a name="effectiveIncludeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```java
public IResolvable getEffectiveIncludeExistingFiles();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveRawTable`<sup>Required</sup> <a name="effectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference getEffectiveRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference getEnvelope();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `rawTable`<sup>Required</sup> <a name="rawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference getRawTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `awsSecretScopeInput`<sup>Optional</sup> <a name="awsSecretScopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```java
public java.lang.String getAwsSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `envelopeInput`<sup>Optional</sup> <a name="envelopeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceAutoloaderEnvelope getEnvelopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFilesInput`<sup>Optional</sup> <a name="includeExistingFilesInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFilesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumnsInput`<sup>Optional</sup> <a name="overridePartitionColumnsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```java
public java.lang.String getQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `rawTableInput`<sup>Optional</sup> <a name="rawTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderRawTable getRawTableInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `serviceCredentialsInput`<sup>Optional</sup> <a name="serviceCredentialsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```java
public java.lang.String getServiceCredentialsInput();
```

- *Type:* java.lang.String

---

##### `awsSecretScope`<sup>Required</sup> <a name="awsSecretScope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```java
public java.lang.String getAwsSecretScope();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeExistingFiles`<sup>Required</sup> <a name="includeExistingFiles" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `overridePartitionColumns`<sup>Required</sup> <a name="overridePartitionColumns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```java
public java.util.List<java.lang.String> getOverridePartitionColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```java
public java.lang.String getQueueUrl();
```

- *Type:* java.lang.String

---

##### `serviceCredentials`<sup>Required</sup> <a name="serviceCredentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```java
public java.lang.String getServiceCredentials();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference;

new DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceAutoloaderRawTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourceCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference;

new DataDatabricksLakewatchDatasourceCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a>

---


### DataDatabricksLakewatchDatasourceExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference;

new DataDatabricksLakewatchDatasourceExistingTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">resetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetIncludeExistingRows` <a name="resetIncludeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```java
public void resetIncludeExistingRows()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effectiveCatalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName">effectiveName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effectiveSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">includeExistingRowsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">includeExistingRows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveCatalog`<sup>Required</sup> <a name="effectiveCatalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```java
public java.lang.String getEffectiveCatalog();
```

- *Type:* java.lang.String

---

##### `effectiveName`<sup>Required</sup> <a name="effectiveName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```java
public java.lang.String getEffectiveName();
```

- *Type:* java.lang.String

---

##### `effectiveSchema`<sup>Required</sup> <a name="effectiveSchema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```java
public java.lang.String getEffectiveSchema();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `includeExistingRowsInput`<sup>Optional</sup> <a name="includeExistingRowsInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRowsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `includeExistingRows`<sup>Required</sup> <a name="includeExistingRows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExistingRows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceExistingTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a>

---


### DataDatabricksLakewatchDatasourceOwnerOutputReference <a name="DataDatabricksLakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceOwnerOutputReference;

new DataDatabricksLakewatchDatasourceOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceOwner getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a>

---


### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference;

new DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourceParsersList <a name="DataDatabricksLakewatchDatasourceParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersList;

new DataDatabricksLakewatchDatasourceParsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get"></a>

```java
public DataDatabricksLakewatchDatasourceParsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksLakewatchDatasourceParsers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>>

---


### DataDatabricksLakewatchDatasourceParsersOutputReference <a name="DataDatabricksLakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersOutputReference;

new DataDatabricksLakewatchDatasourceParsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```java
public void putTargetTable(DataDatabricksLakewatchDatasourceParsersTargetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```java
public void resetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput">targetTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveTargetTable`<sup>Required</sup> <a name="effectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```java
public DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference getEffectiveTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```java
public DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceParsersTargetTable getTargetTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceParsers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>

---


### DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference;

new DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceParsersTargetTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourceProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference;

new DataDatabricksLakewatchDatasourceProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksLakewatchDatasourceProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---


### DataDatabricksLakewatchDatasourceScheduleOutputReference <a name="DataDatabricksLakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceScheduleOutputReference;

new DataDatabricksLakewatchDatasourceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup">resetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```java
public void resetAtLeastEvery()
```

##### `resetComputeGroup` <a name="resetComputeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```java
public void resetComputeGroup()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput">computeGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup">computeGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```java
public java.lang.String getAtLeastEveryInput();
```

- *Type:* java.lang.String

---

##### `computeGroupInput`<sup>Optional</sup> <a name="computeGroupInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```java
public java.lang.String getComputeGroupInput();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

---

##### `computeGroup`<sup>Required</sup> <a name="computeGroup" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```java
public java.lang.String getComputeGroup();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference;

new DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceStatusIngestionJob getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference;

new DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceStatusIngestionPipeline getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourceStatusOutputReference <a name="DataDatabricksLakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceStatusOutputReference;

new DataDatabricksLakewatchDatasourceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionJob`<sup>Required</sup> <a name="ingestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```java
public DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference getIngestionJob();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestionPipeline`<sup>Required</sup> <a name="ingestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```java
public DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference getIngestionPipeline();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a>

---


### DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference;

new DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effectiveStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

---

##### `effectiveStartTime`<sup>Required</sup> <a name="effectiveStartTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```java
public java.lang.String getEffectiveStartTime();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceUnityCatalogConnection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourceUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_lakewatch_datasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference;

new DataDatabricksLakewatchDatasourceUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```java
public DataDatabricksLakewatchDatasourceUpdatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a>

---



