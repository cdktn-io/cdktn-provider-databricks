# `dataDatabricksPostgresDataApi` Submodule <a name="`dataDatabricksPostgresDataApi` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresDataApi <a name="DataDatabricksPostgresDataApi" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApi;

DataDatabricksPostgresDataApi.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresDataApiProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresDataApiProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApi;

DataDatabricksPostgresDataApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApi;

DataDatabricksPostgresDataApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApi;

DataDatabricksPostgresDataApi.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApi;

DataDatabricksPostgresDataApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresDataApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresDataApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig"></a>

```java
public DataDatabricksPostgresDataApiProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec"></a>

```java
public DataDatabricksPostgresDataApiSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status"></a>

```java
public DataDatabricksPostgresDataApiStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresDataApiProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresDataApiConfig <a name="DataDatabricksPostgresDataApiConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiConfig;

DataDatabricksPostgresDataApiConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresDataApiProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresDataApiProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

### DataDatabricksPostgresDataApiProviderConfig <a name="DataDatabricksPostgresDataApiProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiProviderConfig;

DataDatabricksPostgresDataApiProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}.

---

### DataDatabricksPostgresDataApiSpec <a name="DataDatabricksPostgresDataApiSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiSpec;

DataDatabricksPostgresDataApiSpec.builder()
//  .dbAggregatesEnabled(java.lang.Boolean|IResolvable)
//  .dbExtraSearchPath(java.util.List<java.lang.String>)
//  .dbMaxRows(java.lang.Number)
//  .dbSchemas(java.util.List<java.lang.String>)
//  .jwtCacheMaxLifetime(java.lang.String)
//  .jwtRoleClaimKey(java.lang.String)
//  .openapiMode(java.lang.String)
//  .serverCorsAllowedOrigins(java.util.List<java.lang.String>)
//  .serverTimingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows">dbMaxRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas">dbSchemas</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode">openapiMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}. |

---

##### `dbAggregatesEnabled`<sup>Optional</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDbAggregatesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}.

---

##### `dbExtraSearchPath`<sup>Optional</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath"></a>

```java
public java.util.List<java.lang.String> getDbExtraSearchPath();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}.

---

##### `dbMaxRows`<sup>Optional</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows"></a>

```java
public java.lang.Number getDbMaxRows();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}.

---

##### `dbSchemas`<sup>Optional</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas"></a>

```java
public java.util.List<java.lang.String> getDbSchemas();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}.

---

##### `jwtCacheMaxLifetime`<sup>Optional</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```java
public java.lang.String getJwtCacheMaxLifetime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}.

---

##### `jwtRoleClaimKey`<sup>Optional</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```java
public java.lang.String getJwtRoleClaimKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}.

---

##### `openapiMode`<sup>Optional</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode"></a>

```java
public java.lang.String getOpenapiMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}.

---

##### `serverCorsAllowedOrigins`<sup>Optional</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```java
public java.util.List<java.lang.String> getServerCorsAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}.

---

##### `serverTimingEnabled`<sup>Optional</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getServerTimingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}.

---

### DataDatabricksPostgresDataApiStatus <a name="DataDatabricksPostgresDataApiStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiStatus;

DataDatabricksPostgresDataApiStatus.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresDataApiProviderConfigOutputReference <a name="DataDatabricksPostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiProviderConfigOutputReference;

new DataDatabricksPostgresDataApiProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresDataApiProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---


### DataDatabricksPostgresDataApiSpecOutputReference <a name="DataDatabricksPostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiSpecOutputReference;

new DataDatabricksPostgresDataApiSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">resetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath">resetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows">resetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas">resetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">resetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">resetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode">resetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">resetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled">resetServerTimingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbAggregatesEnabled` <a name="resetDbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```java
public void resetDbAggregatesEnabled()
```

##### `resetDbExtraSearchPath` <a name="resetDbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```java
public void resetDbExtraSearchPath()
```

##### `resetDbMaxRows` <a name="resetDbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```java
public void resetDbMaxRows()
```

##### `resetDbSchemas` <a name="resetDbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```java
public void resetDbSchemas()
```

##### `resetJwtCacheMaxLifetime` <a name="resetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```java
public void resetJwtCacheMaxLifetime()
```

##### `resetJwtRoleClaimKey` <a name="resetJwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```java
public void resetJwtRoleClaimKey()
```

##### `resetOpenapiMode` <a name="resetOpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```java
public void resetOpenapiMode()
```

##### `resetServerCorsAllowedOrigins` <a name="resetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```java
public void resetServerCorsAllowedOrigins()
```

##### `resetServerTimingEnabled` <a name="resetServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```java
public void resetServerTimingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">dbAggregatesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">dbExtraSearchPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput">dbMaxRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput">dbSchemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">jwtCacheMaxLifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">jwtRoleClaimKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput">openapiModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">serverCorsAllowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">serverTimingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode">openapiMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbAggregatesEnabledInput`<sup>Optional</sup> <a name="dbAggregatesEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDbAggregatesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbExtraSearchPathInput`<sup>Optional</sup> <a name="dbExtraSearchPathInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```java
public java.util.List<java.lang.String> getDbExtraSearchPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbMaxRowsInput`<sup>Optional</sup> <a name="dbMaxRowsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```java
public java.lang.Number getDbMaxRowsInput();
```

- *Type:* java.lang.Number

---

##### `dbSchemasInput`<sup>Optional</sup> <a name="dbSchemasInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```java
public java.util.List<java.lang.String> getDbSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="jwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```java
public java.lang.String getJwtCacheMaxLifetimeInput();
```

- *Type:* java.lang.String

---

##### `jwtRoleClaimKeyInput`<sup>Optional</sup> <a name="jwtRoleClaimKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```java
public java.lang.String getJwtRoleClaimKeyInput();
```

- *Type:* java.lang.String

---

##### `openapiModeInput`<sup>Optional</sup> <a name="openapiModeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```java
public java.lang.String getOpenapiModeInput();
```

- *Type:* java.lang.String

---

##### `serverCorsAllowedOriginsInput`<sup>Optional</sup> <a name="serverCorsAllowedOriginsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getServerCorsAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverTimingEnabledInput`<sup>Optional</sup> <a name="serverTimingEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getServerTimingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDbAggregatesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```java
public java.util.List<java.lang.String> getDbExtraSearchPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```java
public java.lang.Number getDbMaxRows();
```

- *Type:* java.lang.Number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```java
public java.util.List<java.lang.String> getDbSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```java
public java.lang.String getJwtCacheMaxLifetime();
```

- *Type:* java.lang.String

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```java
public java.lang.String getJwtRoleClaimKey();
```

- *Type:* java.lang.String

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode"></a>

```java
public java.lang.String getOpenapiMode();
```

- *Type:* java.lang.String

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```java
public java.util.List<java.lang.String> getServerCorsAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getServerTimingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresDataApiSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a>

---


### DataDatabricksPostgresDataApiStatusOutputReference <a name="DataDatabricksPostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_data_api.DataDatabricksPostgresDataApiStatusOutputReference;

new DataDatabricksPostgresDataApiStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas">availableSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">dbAggregatesEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath">dbExtraSearchPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows">dbMaxRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas">dbSchemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">jwtCacheMaxLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">jwtRoleClaimKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode">openapiMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">serverCorsAllowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled">serverTimingEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableSchemas`<sup>Required</sup> <a name="availableSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```java
public java.util.List<java.lang.String> getAvailableSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbAggregatesEnabled`<sup>Required</sup> <a name="dbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```java
public IResolvable getDbAggregatesEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dbExtraSearchPath`<sup>Required</sup> <a name="dbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```java
public java.util.List<java.lang.String> getDbExtraSearchPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbMaxRows`<sup>Required</sup> <a name="dbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```java
public java.lang.Number getDbMaxRows();
```

- *Type:* java.lang.Number

---

##### `dbSchemas`<sup>Required</sup> <a name="dbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```java
public java.util.List<java.lang.String> getDbSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jwtCacheMaxLifetime`<sup>Required</sup> <a name="jwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```java
public java.lang.String getJwtCacheMaxLifetime();
```

- *Type:* java.lang.String

---

##### `jwtRoleClaimKey`<sup>Required</sup> <a name="jwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```java
public java.lang.String getJwtRoleClaimKey();
```

- *Type:* java.lang.String

---

##### `openapiMode`<sup>Required</sup> <a name="openapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode"></a>

```java
public java.lang.String getOpenapiMode();
```

- *Type:* java.lang.String

---

##### `serverCorsAllowedOrigins`<sup>Required</sup> <a name="serverCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```java
public java.util.List<java.lang.String> getServerCorsAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverTimingEnabled`<sup>Required</sup> <a name="serverTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```java
public IResolvable getServerTimingEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresDataApiStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a>

---



