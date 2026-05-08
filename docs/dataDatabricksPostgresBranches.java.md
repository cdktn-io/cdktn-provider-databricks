# `dataDatabricksPostgresBranches` Submodule <a name="`dataDatabricksPostgresBranches` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresBranches <a name="DataDatabricksPostgresBranches" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches databricks_postgres_branches}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranches;

DataDatabricksPostgresBranches.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresBranchesProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#parent DataDatabricksPostgresBranches#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#page_size DataDatabricksPostgresBranches#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#parent DataDatabricksPostgresBranches#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#page_size DataDatabricksPostgresBranches#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresBranchesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresBranches resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranches;

DataDatabricksPostgresBranches.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranches;

DataDatabricksPostgresBranches.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranches;

DataDatabricksPostgresBranches.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranches;

DataDatabricksPostgresBranches.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresBranches.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresBranches resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresBranches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresBranches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresBranches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.branches">branches</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList">DataDatabricksPostgresBranchesBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference">DataDatabricksPostgresBranchesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.branches"></a>

```java
public DataDatabricksPostgresBranchesBranchesList getBranches();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList">DataDatabricksPostgresBranchesBranchesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.providerConfig"></a>

```java
public DataDatabricksPostgresBranchesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference">DataDatabricksPostgresBranchesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresBranchesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranches.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresBranchesBranches <a name="DataDatabricksPostgresBranchesBranches" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranches;

DataDatabricksPostgresBranchesBranches.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresBranchesBranchesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#name DataDatabricksPostgresBranches#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#name DataDatabricksPostgresBranches#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches.property.providerConfig"></a>

```java
public DataDatabricksPostgresBranchesBranchesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}.

---

### DataDatabricksPostgresBranchesBranchesProviderConfig <a name="DataDatabricksPostgresBranchesBranchesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesProviderConfig;

DataDatabricksPostgresBranchesBranchesProviderConfig.builder()
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}.

---

### DataDatabricksPostgresBranchesBranchesSpec <a name="DataDatabricksPostgresBranchesBranchesSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesSpec;

DataDatabricksPostgresBranchesBranchesSpec.builder()
//  .expireTime(java.lang.String)
//  .isProtected(java.lang.Boolean|IResolvable)
//  .noExpiry(java.lang.Boolean|IResolvable)
//  .sourceBranch(java.lang.String)
//  .sourceBranchLsn(java.lang.String)
//  .sourceBranchTime(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#expire_time DataDatabricksPostgresBranches#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#is_protected DataDatabricksPostgresBranches#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#no_expiry DataDatabricksPostgresBranches#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch DataDatabricksPostgresBranches#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch_lsn DataDatabricksPostgresBranches#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch_time DataDatabricksPostgresBranches#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#ttl DataDatabricksPostgresBranches#ttl}. |

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#expire_time DataDatabricksPostgresBranches#expire_time}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#is_protected DataDatabricksPostgresBranches#is_protected}.

---

##### `noExpiry`<sup>Optional</sup> <a name="noExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#no_expiry DataDatabricksPostgresBranches#no_expiry}.

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch DataDatabricksPostgresBranches#source_branch}.

---

##### `sourceBranchLsn`<sup>Optional</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch_lsn DataDatabricksPostgresBranches#source_branch_lsn}.

---

##### `sourceBranchTime`<sup>Optional</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#source_branch_time DataDatabricksPostgresBranches#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#ttl DataDatabricksPostgresBranches#ttl}.

---

### DataDatabricksPostgresBranchesBranchesStatus <a name="DataDatabricksPostgresBranchesBranchesStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesStatus;

DataDatabricksPostgresBranchesBranchesStatus.builder()
    .build();
```


### DataDatabricksPostgresBranchesConfig <a name="DataDatabricksPostgresBranchesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesConfig;

DataDatabricksPostgresBranchesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresBranchesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#parent DataDatabricksPostgresBranches#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#page_size DataDatabricksPostgresBranches#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#parent DataDatabricksPostgresBranches#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#page_size DataDatabricksPostgresBranches#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresBranchesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}.

---

### DataDatabricksPostgresBranchesProviderConfig <a name="DataDatabricksPostgresBranchesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesProviderConfig;

DataDatabricksPostgresBranchesProviderConfig.builder()
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresBranchesBranchesList <a name="DataDatabricksPostgresBranchesBranchesList" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesList;

new DataDatabricksPostgresBranchesBranchesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.get"></a>

```java
public DataDatabricksPostgresBranchesBranchesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches">DataDatabricksPostgresBranchesBranches</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresBranchesBranches> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches">DataDatabricksPostgresBranchesBranches</a>>

---


### DataDatabricksPostgresBranchesBranchesOutputReference <a name="DataDatabricksPostgresBranchesBranchesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesOutputReference;

new DataDatabricksPostgresBranchesBranchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresBranchesBranchesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference">DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference">DataDatabricksPostgresBranchesBranchesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference">DataDatabricksPostgresBranchesBranchesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches">DataDatabricksPostgresBranchesBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference">DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.spec"></a>

```java
public DataDatabricksPostgresBranchesBranchesSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference">DataDatabricksPostgresBranchesBranchesSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.status"></a>

```java
public DataDatabricksPostgresBranchesBranchesStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference">DataDatabricksPostgresBranchesBranchesStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresBranchesBranchesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresBranchesBranches getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranches">DataDatabricksPostgresBranchesBranches</a>

---


### DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference <a name="DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference;

new DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresBranchesBranchesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesProviderConfig">DataDatabricksPostgresBranchesBranchesProviderConfig</a>

---


### DataDatabricksPostgresBranchesBranchesSpecOutputReference <a name="DataDatabricksPostgresBranchesBranchesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesSpecOutputReference;

new DataDatabricksPostgresBranchesBranchesSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetNoExpiry">resetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranchLsn">resetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranchTime">resetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetIsProtected"></a>

```java
public void resetIsProtected()
```

##### `resetNoExpiry` <a name="resetNoExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetNoExpiry"></a>

```java
public void resetNoExpiry()
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranch"></a>

```java
public void resetSourceBranch()
```

##### `resetSourceBranchLsn` <a name="resetSourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranchLsn"></a>

```java
public void resetSourceBranchLsn()
```

##### `resetSourceBranchTime` <a name="resetSourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetSourceBranchTime"></a>

```java
public void resetSourceBranchTime()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.noExpiryInput">noExpiryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchInput">sourceBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchLsnInput">sourceBranchLsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchTimeInput">sourceBranchTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.isProtected">isProtected</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.noExpiry">noExpiry</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec">DataDatabricksPostgresBranchesBranchesSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.isProtectedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsProtectedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noExpiryInput`<sup>Optional</sup> <a name="noExpiryInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.noExpiryInput"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchInput"></a>

```java
public java.lang.String getSourceBranchInput();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsnInput`<sup>Optional</sup> <a name="sourceBranchLsnInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchLsnInput"></a>

```java
public java.lang.String getSourceBranchLsnInput();
```

- *Type:* java.lang.String

---

##### `sourceBranchTimeInput`<sup>Optional</sup> <a name="sourceBranchTimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchTimeInput"></a>

```java
public java.lang.String getSourceBranchTimeInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.isProtected"></a>

```java
public java.lang.Boolean|IResolvable getIsProtected();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noExpiry`<sup>Required</sup> <a name="noExpiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.noExpiry"></a>

```java
public java.lang.Boolean|IResolvable getNoExpiry();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresBranchesBranchesSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesSpec">DataDatabricksPostgresBranchesBranchesSpec</a>

---


### DataDatabricksPostgresBranchesBranchesStatusOutputReference <a name="DataDatabricksPostgresBranchesBranchesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesBranchesStatusOutputReference;

new DataDatabricksPostgresBranchesBranchesStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.branchId">branchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.currentState">currentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.default">default</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.isProtected">isProtected</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.logicalSizeBytes">logicalSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.pendingState">pendingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranchLsn">sourceBranchLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranchTime">sourceBranchTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.stateChangeTime">stateChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatus">DataDatabricksPostgresBranchesBranchesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchId`<sup>Required</sup> <a name="branchId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.branchId"></a>

```java
public java.lang.String getBranchId();
```

- *Type:* java.lang.String

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.currentState"></a>

```java
public java.lang.String getCurrentState();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.isProtected"></a>

```java
public IResolvable getIsProtected();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `logicalSizeBytes`<sup>Required</sup> <a name="logicalSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.logicalSizeBytes"></a>

```java
public java.lang.Number getLogicalSizeBytes();
```

- *Type:* java.lang.Number

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.pendingState"></a>

```java
public java.lang.String getPendingState();
```

- *Type:* java.lang.String

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `sourceBranchLsn`<sup>Required</sup> <a name="sourceBranchLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranchLsn"></a>

```java
public java.lang.String getSourceBranchLsn();
```

- *Type:* java.lang.String

---

##### `sourceBranchTime`<sup>Required</sup> <a name="sourceBranchTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.sourceBranchTime"></a>

```java
public java.lang.String getSourceBranchTime();
```

- *Type:* java.lang.String

---

##### `stateChangeTime`<sup>Required</sup> <a name="stateChangeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.stateChangeTime"></a>

```java
public java.lang.String getStateChangeTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresBranchesBranchesStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesBranchesStatus">DataDatabricksPostgresBranchesBranchesStatus</a>

---


### DataDatabricksPostgresBranchesProviderConfigOutputReference <a name="DataDatabricksPostgresBranchesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_branches.DataDatabricksPostgresBranchesProviderConfigOutputReference;

new DataDatabricksPostgresBranchesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresBranchesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranches.DataDatabricksPostgresBranchesProviderConfig">DataDatabricksPostgresBranchesProviderConfig</a>

---



