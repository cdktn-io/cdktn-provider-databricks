# `dataDatabricksPostgresSyncedTable` Submodule <a name="`dataDatabricksPostgresSyncedTable` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSyncedTable <a name="DataDatabricksPostgresSyncedTable" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTable;

DataDatabricksPostgresSyncedTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresSyncedTableProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresSyncedTableProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTable;

DataDatabricksPostgresSyncedTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTable;

DataDatabricksPostgresSyncedTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTable;

DataDatabricksPostgresSyncedTable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTable;

DataDatabricksPostgresSyncedTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresSyncedTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresSyncedTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId">syncedTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig"></a>

```java
public DataDatabricksPostgresSyncedTableProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec"></a>

```java
public DataDatabricksPostgresSyncedTableSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status"></a>

```java
public DataDatabricksPostgresSyncedTableStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a>

---

##### `syncedTableId`<sup>Required</sup> <a name="syncedTableId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId"></a>

```java
public java.lang.String getSyncedTableId();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSyncedTableConfig <a name="DataDatabricksPostgresSyncedTableConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableConfig;

DataDatabricksPostgresSyncedTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresSyncedTableProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresSyncedTableProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

### DataDatabricksPostgresSyncedTableProviderConfig <a name="DataDatabricksPostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableProviderConfig;

DataDatabricksPostgresSyncedTableProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}.

---

### DataDatabricksPostgresSyncedTableSpec <a name="DataDatabricksPostgresSyncedTableSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpec;

DataDatabricksPostgresSyncedTableSpec.builder()
//  .acceleratedSync(java.lang.Boolean|IResolvable)
//  .branch(java.lang.String)
//  .createDatabaseObjectsIfMissing(java.lang.Boolean|IResolvable)
//  .existingPipelineId(java.lang.String)
//  .extraColumns(IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecExtraColumns>)
//  .newPipelineSpec(DataDatabricksPostgresSyncedTableSpecNewPipelineSpec)
//  .postgresDatabase(java.lang.String)
//  .primaryKeyColumns(java.util.List<java.lang.String>)
//  .schedulingPolicy(java.lang.String)
//  .sourceTableFullName(java.lang.String)
//  .timeseriesKey(java.lang.String)
//  .typeOverrides(IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecTypeOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync">acceleratedSync</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId">existingPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns">extraColumns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides">typeOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}. |

---

##### `acceleratedSync`<sup>Optional</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync"></a>

```java
public java.lang.Boolean|IResolvable getAcceleratedSync();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}.

---

##### `createDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existingPipelineId`<sup>Optional</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId"></a>

```java
public java.lang.String getExistingPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}.

---

##### `extraColumns`<sup>Optional</sup> <a name="extraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecExtraColumns> getExtraColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}.

---

##### `newPipelineSpec`<sup>Optional</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec"></a>

```java
public DataDatabricksPostgresSyncedTableSpecNewPipelineSpec getNewPipelineSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}.

---

##### `postgresDatabase`<sup>Optional</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}.

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}.

---

##### `typeOverrides`<sup>Optional</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecTypeOverrides> getTypeOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}.

---

### DataDatabricksPostgresSyncedTableSpecExtraColumns <a name="DataDatabricksPostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecExtraColumns;

DataDatabricksPostgresSyncedTableSpecExtraColumns.builder()
    .columnName(java.lang.String)
    .columnType(java.lang.String)
//  .compute(java.lang.String)
//  .maintenance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType">columnType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute">compute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance">maintenance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```java
public java.lang.String getColumnType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute"></a>

```java
public java.lang.String getCompute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```java
public java.lang.String getMaintenance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}.

---

### DataDatabricksPostgresSyncedTableSpecNewPipelineSpec <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec;

DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.builder()
//  .budgetPolicyId(java.lang.String)
//  .storageCatalog(java.lang.String)
//  .storageSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storageCatalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storageSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}. |

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}.

---

##### `storageCatalog`<sup>Optional</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```java
public java.lang.String getStorageCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}.

---

##### `storageSchema`<sup>Optional</sup> <a name="storageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```java
public java.lang.String getStorageSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}.

---

### DataDatabricksPostgresSyncedTableSpecTypeOverrides <a name="DataDatabricksPostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecTypeOverrides;

DataDatabricksPostgresSyncedTableSpecTypeOverrides.builder()
    .columnName(java.lang.String)
    .pgType(java.lang.String)
//  .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType">pgType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```java
public java.lang.String getPgType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}.

---

### DataDatabricksPostgresSyncedTableStatus <a name="DataDatabricksPostgresSyncedTableStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatus;

DataDatabricksPostgresSyncedTableStatus.builder()
    .build();
```


### DataDatabricksPostgresSyncedTableStatusLastSync <a name="DataDatabricksPostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusLastSync;

DataDatabricksPostgresSyncedTableStatusLastSync.builder()
    .build();
```


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo;

DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.builder()
    .build();
```


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress;

DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSyncedTableProviderConfigOutputReference <a name="DataDatabricksPostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableProviderConfigOutputReference;

new DataDatabricksPostgresSyncedTableProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsList <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecExtraColumnsList;

new DataDatabricksPostgresSyncedTableSpecExtraColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get"></a>

```java
public DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecExtraColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>>

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference;

new DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">resetMaintenance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompute` <a name="resetCompute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```java
public void resetCompute()
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```java
public void resetMaintenance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">computeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">maintenanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">columnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">compute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">maintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```java
public java.lang.String getColumnTypeInput();
```

- *Type:* java.lang.String

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```java
public java.lang.String getComputeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```java
public java.lang.String getMaintenanceInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```java
public java.lang.String getColumnType();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```java
public java.lang.String getCompute();
```

- *Type:* java.lang.String

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```java
public java.lang.String getMaintenance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>

---


### DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference;

new DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">resetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">resetStorageSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetStorageCatalog` <a name="resetStorageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```java
public void resetStorageCatalog()
```

##### `resetStorageSchema` <a name="resetStorageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```java
public void resetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storageCatalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storageSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storageCatalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storageSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `storageCatalogInput`<sup>Optional</sup> <a name="storageCatalogInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```java
public java.lang.String getStorageCatalogInput();
```

- *Type:* java.lang.String

---

##### `storageSchemaInput`<sup>Optional</sup> <a name="storageSchemaInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```java
public java.lang.String getStorageSchemaInput();
```

- *Type:* java.lang.String

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `storageCatalog`<sup>Required</sup> <a name="storageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```java
public java.lang.String getStorageCatalog();
```

- *Type:* java.lang.String

---

##### `storageSchema`<sup>Required</sup> <a name="storageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```java
public java.lang.String getStorageSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableSpecNewPipelineSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecOutputReference;

new DataDatabricksPostgresSyncedTableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns">putExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec">putNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides">putTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync">resetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">resetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId">resetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns">resetExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">resetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase">resetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides">resetTypeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraColumns` <a name="putExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```java
public void putExtraColumns(IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecExtraColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>>

---

##### `putNewPipelineSpec` <a name="putNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```java
public void putNewPipelineSpec(DataDatabricksPostgresSyncedTableSpecNewPipelineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `putTypeOverrides` <a name="putTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```java
public void putTypeOverrides(IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecTypeOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>>

---

##### `resetAcceleratedSync` <a name="resetAcceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```java
public void resetAcceleratedSync()
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCreateDatabaseObjectsIfMissing` <a name="resetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```java
public void resetCreateDatabaseObjectsIfMissing()
```

##### `resetExistingPipelineId` <a name="resetExistingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```java
public void resetExistingPipelineId()
```

##### `resetExtraColumns` <a name="resetExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```java
public void resetExtraColumns()
```

##### `resetNewPipelineSpec` <a name="resetNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```java
public void resetNewPipelineSpec()
```

##### `resetPostgresDatabase` <a name="resetPostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```java
public void resetPostgresDatabase()
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```java
public void resetPrimaryKeyColumns()
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```java
public void resetSchedulingPolicy()
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```java
public void resetSourceTableFullName()
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```java
public void resetTimeseriesKey()
```

##### `resetTypeOverrides` <a name="resetTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```java
public void resetTypeOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns">extraColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec">newPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides">typeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">acceleratedSyncInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">createDatabaseObjectsIfMissingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existingPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput">extraColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">newPipelineSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgresDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput">typeOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync">acceleratedSync</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">createDatabaseObjectsIfMissing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId">existingPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgresDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extraColumns`<sup>Required</sup> <a name="extraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```java
public DataDatabricksPostgresSyncedTableSpecExtraColumnsList getExtraColumns();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a>

---

##### `newPipelineSpec`<sup>Required</sup> <a name="newPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```java
public DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference getNewPipelineSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `typeOverrides`<sup>Required</sup> <a name="typeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```java
public DataDatabricksPostgresSyncedTableSpecTypeOverridesList getTypeOverrides();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a>

---

##### `acceleratedSyncInput`<sup>Optional</sup> <a name="acceleratedSyncInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceleratedSyncInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `createDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="createDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `existingPipelineIdInput`<sup>Optional</sup> <a name="existingPipelineIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```java
public java.lang.String getExistingPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `extraColumnsInput`<sup>Optional</sup> <a name="extraColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecExtraColumns> getExtraColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>>

---

##### `newPipelineSpecInput`<sup>Optional</sup> <a name="newPipelineSpecInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableSpecNewPipelineSpec getNewPipelineSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgresDatabaseInput`<sup>Optional</sup> <a name="postgresDatabaseInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```java
public java.lang.String getPostgresDatabaseInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```java
public java.lang.String getSchedulingPolicyInput();
```

- *Type:* java.lang.String

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```java
public java.lang.String getSourceTableFullNameInput();
```

- *Type:* java.lang.String

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```java
public java.lang.String getTimeseriesKeyInput();
```

- *Type:* java.lang.String

---

##### `typeOverridesInput`<sup>Optional</sup> <a name="typeOverridesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecTypeOverrides> getTypeOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>>

---

##### `acceleratedSync`<sup>Required</sup> <a name="acceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```java
public java.lang.Boolean|IResolvable getAcceleratedSync();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `createDatabaseObjectsIfMissing`<sup>Required</sup> <a name="createDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```java
public java.lang.Boolean|IResolvable getCreateDatabaseObjectsIfMissing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `existingPipelineId`<sup>Required</sup> <a name="existingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```java
public java.lang.String getExistingPipelineId();
```

- *Type:* java.lang.String

---

##### `postgresDatabase`<sup>Required</sup> <a name="postgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```java
public java.lang.String getPostgresDatabase();
```

- *Type:* java.lang.String

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresSyncedTableSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesList <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecTypeOverridesList;

new DataDatabricksPostgresSyncedTableSpecTypeOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get"></a>

```java
public DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresSyncedTableSpecTypeOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>>

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference;

new DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```java
public void resetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">pgTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">pgType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `pgTypeInput`<sup>Optional</sup> <a name="pgTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```java
public java.lang.String getPgTypeInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `pgType`<sup>Required</sup> <a name="pgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```java
public java.lang.String getPgType();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference;

new DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">deltaCommitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">deltaCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaCommitTime`<sup>Required</sup> <a name="deltaCommitTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```java
public java.lang.String getDeltaCommitTime();
```

- *Type:* java.lang.String

---

##### `deltaCommitVersion`<sup>Required</sup> <a name="deltaCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```java
public java.lang.Number getDeltaCommitVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference;

new DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">deltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">syncEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">syncStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaTableSyncInfo`<sup>Required</sup> <a name="deltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```java
public DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference getDeltaTableSyncInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `syncEndTime`<sup>Required</sup> <a name="syncEndTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```java
public java.lang.String getSyncEndTime();
```

- *Type:* java.lang.String

---

##### `syncStartTime`<sup>Required</sup> <a name="syncStartTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```java
public java.lang.String getSyncStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresSyncedTableStatusLastSync getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a>

---


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference;

new DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```java
public java.lang.Number getEstimatedCompletionTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```java
public java.lang.Number getLatestVersionCurrentlyProcessing();
```

- *Type:* java.lang.Number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```java
public java.lang.Number getSyncedRowCount();
```

- *Type:* java.lang.Number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```java
public java.lang.Number getSyncProgressCompletion();
```

- *Type:* java.lang.Number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```java
public java.lang.Number getTotalRowCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a>

---


### DataDatabricksPostgresSyncedTableStatusOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_synced_table.DataDatabricksPostgresSyncedTableStatusOutputReference;

new DataDatabricksPostgresSyncedTableStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync">lastSync</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime">lastSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioningPhase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```java
public java.lang.String getDetailedState();
```

- *Type:* java.lang.String

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```java
public java.lang.Number getLastProcessedCommitVersion();
```

- *Type:* java.lang.Number

---

##### `lastSync`<sup>Required</sup> <a name="lastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```java
public DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference getLastSync();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```java
public java.lang.String getLastSyncTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `ongoingSyncProgress`<sup>Required</sup> <a name="ongoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```java
public DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference getOngoingSyncProgress();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `provisioningPhase`<sup>Required</sup> <a name="provisioningPhase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```java
public java.lang.String getProvisioningPhase();
```

- *Type:* java.lang.String

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```java
public java.lang.String getUnityCatalogProvisioningState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresSyncedTableStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a>

---



