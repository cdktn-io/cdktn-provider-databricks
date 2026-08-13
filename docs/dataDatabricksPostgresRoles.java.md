# `dataDatabricksPostgresRoles` Submodule <a name="`dataDatabricksPostgresRoles` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRoles <a name="DataDatabricksPostgresRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles databricks_postgres_roles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRoles;

DataDatabricksPostgresRoles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresRolesProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresRolesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRoles;

DataDatabricksPostgresRoles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRoles;

DataDatabricksPostgresRoles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRoles;

DataDatabricksPostgresRoles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRoles;

DataDatabricksPostgresRoles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresRoles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig"></a>

```java
public DataDatabricksPostgresRolesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles"></a>

```java
public DataDatabricksPostgresRolesRolesList getRoles();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresRolesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRolesConfig <a name="DataDatabricksPostgresRolesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesConfig;

DataDatabricksPostgresRolesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksPostgresRolesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresRolesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesProviderConfig <a name="DataDatabricksPostgresRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesProviderConfig;

DataDatabricksPostgresRolesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRoles <a name="DataDatabricksPostgresRolesRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRoles;

DataDatabricksPostgresRolesRoles.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresRolesRolesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig"></a>

```java
public DataDatabricksPostgresRolesRolesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesRolesProviderConfig <a name="DataDatabricksPostgresRolesRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesProviderConfig;

DataDatabricksPostgresRolesRolesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRolesSpec <a name="DataDatabricksPostgresRolesRolesSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesSpec;

DataDatabricksPostgresRolesRolesSpec.builder()
//  .attributes(DataDatabricksPostgresRolesRolesSpecAttributes)
//  .authMethod(java.lang.String)
//  .identityType(java.lang.String)
//  .membershipRoles(java.util.List<java.lang.String>)
//  .postgresRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes"></a>

```java
public DataDatabricksPostgresRolesRolesSpecAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesSpecAttributes <a name="DataDatabricksPostgresRolesRolesSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesSpecAttributes;

DataDatabricksPostgresRolesRolesSpecAttributes.builder()
//  .bypassrls(java.lang.Boolean|IResolvable)
//  .createdb(java.lang.Boolean|IResolvable)
//  .createrole(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

### DataDatabricksPostgresRolesRolesStatus <a name="DataDatabricksPostgresRolesRolesStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesStatus;

DataDatabricksPostgresRolesRolesStatus.builder()
//  .attributes(DataDatabricksPostgresRolesRolesStatusAttributes)
//  .authMethod(java.lang.String)
//  .identityType(java.lang.String)
//  .membershipRoles(java.util.List<java.lang.String>)
//  .postgresRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes"></a>

```java
public DataDatabricksPostgresRolesRolesStatusAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membershipRoles`<sup>Optional</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgresRole`<sup>Optional</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesStatusAttributes <a name="DataDatabricksPostgresRolesRolesStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesStatusAttributes;

DataDatabricksPostgresRolesRolesStatusAttributes.builder()
//  .bypassrls(java.lang.Boolean|IResolvable)
//  .createdb(java.lang.Boolean|IResolvable)
//  .createrole(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesProviderConfigOutputReference;

new DataDatabricksPostgresRolesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresRolesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesList <a name="DataDatabricksPostgresRolesRolesList" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesList;

new DataDatabricksPostgresRolesRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get"></a>

```java
public DataDatabricksPostgresRolesRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPostgresRolesRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>>

---


### DataDatabricksPostgresRolesRolesOutputReference <a name="DataDatabricksPostgresRolesRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesOutputReference;

new DataDatabricksPostgresRolesRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresRolesRolesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksPostgresRolesRolesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec"></a>

```java
public DataDatabricksPostgresRolesRolesSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status"></a>

```java
public DataDatabricksPostgresRolesRolesStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresRolesRoles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>

---


### DataDatabricksPostgresRolesRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference;

new DataDatabricksPostgresRolesRolesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesSpecAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference;

new DataDatabricksPostgresRolesRolesSpecAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls"></a>

```java
public void resetBypassrls()
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb"></a>

```java
public void resetCreatedb()
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole"></a>

```java
public void resetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput"></a>

```java
public java.lang.Boolean|IResolvable getBypassrlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatedbInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateroleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesSpecAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---


### DataDatabricksPostgresRolesRolesSpecOutputReference <a name="DataDatabricksPostgresRolesRolesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesSpecOutputReference;

new DataDatabricksPostgresRolesRolesSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes"></a>

```java
public void putAttributes(DataDatabricksPostgresRolesRolesSpecAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles"></a>

```java
public void resetMembershipRoles()
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole"></a>

```java
public void resetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes"></a>

```java
public DataDatabricksPostgresRolesRolesSpecAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesSpecAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput"></a>

```java
public java.util.List<java.lang.String> getMembershipRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput"></a>

```java
public java.lang.String getPostgresRoleInput();
```

- *Type:* java.lang.String

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresRolesRolesSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a>

---


### DataDatabricksPostgresRolesRolesStatusAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference;

new DataDatabricksPostgresRolesRolesStatusAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls">resetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb">resetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole">resetCreaterole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBypassrls` <a name="resetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls"></a>

```java
public void resetBypassrls()
```

##### `resetCreatedb` <a name="resetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb"></a>

```java
public void resetCreatedb()
```

##### `resetCreaterole` <a name="resetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole"></a>

```java
public void resetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput">bypassrlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput">createdbInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput">createroleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassrlsInput`<sup>Optional</sup> <a name="bypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput"></a>

```java
public java.lang.Boolean|IResolvable getBypassrlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdbInput`<sup>Optional</sup> <a name="createdbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatedbInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createroleInput`<sup>Optional</sup> <a name="createroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateroleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls"></a>

```java
public java.lang.Boolean|IResolvable getBypassrls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb"></a>

```java
public java.lang.Boolean|IResolvable getCreatedb();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole"></a>

```java
public java.lang.Boolean|IResolvable getCreaterole();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesStatusAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---


### DataDatabricksPostgresRolesRolesStatusOutputReference <a name="DataDatabricksPostgresRolesRolesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_roles.DataDatabricksPostgresRolesRolesStatusOutputReference;

new DataDatabricksPostgresRolesRolesStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles">resetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole">resetPostgresRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes"></a>

```java
public void putAttributes(DataDatabricksPostgresRolesRolesStatusAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetMembershipRoles` <a name="resetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles"></a>

```java
public void resetMembershipRoles()
```

##### `resetPostgresRole` <a name="resetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole"></a>

```java
public void resetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput">membershipRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput">postgresRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles">membershipRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole">postgresRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes"></a>

```java
public DataDatabricksPostgresRolesRolesStatusAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput"></a>

```java
public IResolvable|DataDatabricksPostgresRolesRolesStatusAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `membershipRolesInput`<sup>Optional</sup> <a name="membershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput"></a>

```java
public java.util.List<java.lang.String> getMembershipRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRoleInput`<sup>Optional</sup> <a name="postgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput"></a>

```java
public java.lang.String getPostgresRoleInput();
```

- *Type:* java.lang.String

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `membershipRoles`<sup>Required</sup> <a name="membershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles"></a>

```java
public java.util.List<java.lang.String> getMembershipRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postgresRole`<sup>Required</sup> <a name="postgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole"></a>

```java
public java.lang.String getPostgresRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresRolesRolesStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a>

---



