# `dataDatabricksPostgresEndpoint` Submodule <a name="`dataDatabricksPostgresEndpoint` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresEndpoint <a name="DataDatabricksPostgresEndpoint" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint databricks_postgres_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpoint;

DataDatabricksPostgresEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresEndpointProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#name DataDatabricksPostgresEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#provider_config DataDatabricksPostgresEndpoint#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#name DataDatabricksPostgresEndpoint#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#provider_config DataDatabricksPostgresEndpoint#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPostgresEndpointProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpoint;

DataDatabricksPostgresEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpoint;

DataDatabricksPostgresEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpoint;

DataDatabricksPostgresEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpoint;

DataDatabricksPostgresEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPostgresEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPostgresEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPostgresEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPostgresEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference">DataDatabricksPostgresEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference">DataDatabricksPostgresEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference">DataDatabricksPostgresEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.providerConfig"></a>

```java
public DataDatabricksPostgresEndpointProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference">DataDatabricksPostgresEndpointProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.spec"></a>

```java
public DataDatabricksPostgresEndpointSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference">DataDatabricksPostgresEndpointSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.status"></a>

```java
public DataDatabricksPostgresEndpointStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference">DataDatabricksPostgresEndpointStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresEndpointConfig <a name="DataDatabricksPostgresEndpointConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointConfig;

DataDatabricksPostgresEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksPostgresEndpointProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#name DataDatabricksPostgresEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#provider_config DataDatabricksPostgresEndpoint#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#name DataDatabricksPostgresEndpoint#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointConfig.property.providerConfig"></a>

```java
public DataDatabricksPostgresEndpointProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#provider_config DataDatabricksPostgresEndpoint#provider_config}.

---

### DataDatabricksPostgresEndpointProviderConfig <a name="DataDatabricksPostgresEndpointProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointProviderConfig;

DataDatabricksPostgresEndpointProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#workspace_id DataDatabricksPostgresEndpoint#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#workspace_id DataDatabricksPostgresEndpoint#workspace_id}.

---

### DataDatabricksPostgresEndpointSpec <a name="DataDatabricksPostgresEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpec;

DataDatabricksPostgresEndpointSpec.builder()
    .endpointType(java.lang.String)
//  .autoscalingLimitMaxCu(java.lang.Number)
//  .autoscalingLimitMinCu(java.lang.Number)
//  .disabled(java.lang.Boolean|IResolvable)
//  .group(DataDatabricksPostgresEndpointSpecGroup)
//  .noSuspension(java.lang.Boolean|IResolvable)
//  .settings(DataDatabricksPostgresEndpointSpecSettings)
//  .suspendTimeoutDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#endpoint_type DataDatabricksPostgresEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#autoscaling_limit_max_cu DataDatabricksPostgresEndpoint#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#autoscaling_limit_min_cu DataDatabricksPostgresEndpoint#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#disabled DataDatabricksPostgresEndpoint#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#group DataDatabricksPostgresEndpoint#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#no_suspension DataDatabricksPostgresEndpoint#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#settings DataDatabricksPostgresEndpoint#settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#suspend_timeout_duration DataDatabricksPostgresEndpoint#suspend_timeout_duration}. |

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#endpoint_type DataDatabricksPostgresEndpoint#endpoint_type}.

---

##### `autoscalingLimitMaxCu`<sup>Optional</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#autoscaling_limit_max_cu DataDatabricksPostgresEndpoint#autoscaling_limit_max_cu}.

---

##### `autoscalingLimitMinCu`<sup>Optional</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#autoscaling_limit_min_cu DataDatabricksPostgresEndpoint#autoscaling_limit_min_cu}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#disabled DataDatabricksPostgresEndpoint#disabled}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.group"></a>

```java
public DataDatabricksPostgresEndpointSpecGroup getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#group DataDatabricksPostgresEndpoint#group}.

---

##### `noSuspension`<sup>Optional</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#no_suspension DataDatabricksPostgresEndpoint#no_suspension}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.settings"></a>

```java
public DataDatabricksPostgresEndpointSpecSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#settings DataDatabricksPostgresEndpoint#settings}.

---

##### `suspendTimeoutDuration`<sup>Optional</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#suspend_timeout_duration DataDatabricksPostgresEndpoint#suspend_timeout_duration}.

---

### DataDatabricksPostgresEndpointSpecGroup <a name="DataDatabricksPostgresEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpecGroup;

DataDatabricksPostgresEndpointSpecGroup.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
//  .enableReadableSecondaries(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#max DataDatabricksPostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#min DataDatabricksPostgresEndpoint#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#enable_readable_secondaries DataDatabricksPostgresEndpoint#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#max DataDatabricksPostgresEndpoint#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#min DataDatabricksPostgresEndpoint#min}.

---

##### `enableReadableSecondaries`<sup>Optional</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#enable_readable_secondaries DataDatabricksPostgresEndpoint#enable_readable_secondaries}.

---

### DataDatabricksPostgresEndpointSpecSettings <a name="DataDatabricksPostgresEndpointSpecSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpecSettings;

DataDatabricksPostgresEndpointSpecSettings.builder()
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#pg_settings DataDatabricksPostgresEndpoint#pg_settings}. |

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#pg_settings DataDatabricksPostgresEndpoint#pg_settings}.

---

### DataDatabricksPostgresEndpointStatus <a name="DataDatabricksPostgresEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatus;

DataDatabricksPostgresEndpointStatus.builder()
    .build();
```


### DataDatabricksPostgresEndpointStatusGroup <a name="DataDatabricksPostgresEndpointStatusGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusGroup;

DataDatabricksPostgresEndpointStatusGroup.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#max DataDatabricksPostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#min DataDatabricksPostgresEndpoint#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#max DataDatabricksPostgresEndpoint#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#min DataDatabricksPostgresEndpoint#min}.

---

### DataDatabricksPostgresEndpointStatusHosts <a name="DataDatabricksPostgresEndpointStatusHosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHosts.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusHosts;

DataDatabricksPostgresEndpointStatusHosts.builder()
    .build();
```


### DataDatabricksPostgresEndpointStatusSettings <a name="DataDatabricksPostgresEndpointStatusSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusSettings;

DataDatabricksPostgresEndpointStatusSettings.builder()
//  .pgSettings(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#pg_settings DataDatabricksPostgresEndpoint#pg_settings}. |

---

##### `pgSettings`<sup>Optional</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_endpoint#pg_settings DataDatabricksPostgresEndpoint#pg_settings}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresEndpointProviderConfigOutputReference <a name="DataDatabricksPostgresEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference;

new DataDatabricksPostgresEndpointProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointProviderConfig">DataDatabricksPostgresEndpointProviderConfig</a>

---


### DataDatabricksPostgresEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference;

new DataDatabricksPostgresEndpointSpecGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">resetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableReadableSecondaries` <a name="resetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```java
public void resetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enableReadableSecondariesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableReadableSecondariesInput`<sup>Optional</sup> <a name="enableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondariesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```java
public java.lang.Boolean|IResolvable getEnableReadableSecondaries();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointSpecGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a>

---


### DataDatabricksPostgresEndpointSpecOutputReference <a name="DataDatabricksPostgresEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpecOutputReference;

new DataDatabricksPostgresEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">resetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu">resetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetNoSuspension">resetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration">resetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putGroup"></a>

```java
public void putGroup(DataDatabricksPostgresEndpointSpecGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putSettings"></a>

```java
public void putSettings(DataDatabricksPostgresEndpointSpecSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a>

---

##### `resetAutoscalingLimitMaxCu` <a name="resetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```java
public void resetAutoscalingLimitMaxCu()
```

##### `resetAutoscalingLimitMinCu` <a name="resetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```java
public void resetAutoscalingLimitMinCu()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetNoSuspension` <a name="resetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetNoSuspension"></a>

```java
public void resetNoSuspension()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetSuspendTimeoutDuration` <a name="resetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```java
public void resetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference">DataDatabricksPostgresEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference">DataDatabricksPostgresEndpointSpecSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">autoscalingLimitMaxCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">autoscalingLimitMinCuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.groupInput">groupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.noSuspensionInput">noSuspensionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput">suspendTimeoutDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.noSuspension">noSuspension</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec">DataDatabricksPostgresEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.group"></a>

```java
public DataDatabricksPostgresEndpointSpecGroupOutputReference getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroupOutputReference">DataDatabricksPostgresEndpointSpecGroupOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.settings"></a>

```java
public DataDatabricksPostgresEndpointSpecSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference">DataDatabricksPostgresEndpointSpecSettingsOutputReference</a>

---

##### `autoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="autoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCuInput();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCuInput`<sup>Optional</sup> <a name="autoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```java
public java.lang.Number getAutoscalingLimitMinCuInput();
```

- *Type:* java.lang.Number

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.groupInput"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointSpecGroup getGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecGroup">DataDatabricksPostgresEndpointSpecGroup</a>

---

##### `noSuspensionInput`<sup>Optional</sup> <a name="noSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.noSuspensionInput"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspensionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.settingsInput"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointSpecSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a>

---

##### `suspendTimeoutDurationInput`<sup>Optional</sup> <a name="suspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```java
public java.lang.String getSuspendTimeoutDurationInput();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `noSuspension`<sup>Required</sup> <a name="noSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.noSuspension"></a>

```java
public java.lang.Boolean|IResolvable getNoSuspension();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresEndpointSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpec">DataDatabricksPostgresEndpointSpec</a>

---


### DataDatabricksPostgresEndpointSpecSettingsOutputReference <a name="DataDatabricksPostgresEndpointSpecSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference;

new DataDatabricksPostgresEndpointSpecSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPostgresEndpointSpecSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointSpecSettings">DataDatabricksPostgresEndpointSpecSettings</a>

---


### DataDatabricksPostgresEndpointStatusGroupOutputReference <a name="DataDatabricksPostgresEndpointStatusGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference;

new DataDatabricksPostgresEndpointStatusGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup">DataDatabricksPostgresEndpointStatusGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries"></a>

```java
public IResolvable getEnableReadableSecondaries();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresEndpointStatusGroup getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroup">DataDatabricksPostgresEndpointStatusGroup</a>

---


### DataDatabricksPostgresEndpointStatusHostsOutputReference <a name="DataDatabricksPostgresEndpointStatusHostsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference;

new DataDatabricksPostgresEndpointStatusHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.readOnlyHost">readOnlyHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHosts">DataDatabricksPostgresEndpointStatusHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `readOnlyHost`<sup>Required</sup> <a name="readOnlyHost" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.readOnlyHost"></a>

```java
public java.lang.String getReadOnlyHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresEndpointStatusHosts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHosts">DataDatabricksPostgresEndpointStatusHosts</a>

---


### DataDatabricksPostgresEndpointStatusOutputReference <a name="DataDatabricksPostgresEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusOutputReference;

new DataDatabricksPostgresEndpointStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu">autoscalingLimitMaxCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu">autoscalingLimitMinCu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.currentState">currentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.disabled">disabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference">DataDatabricksPostgresEndpointStatusGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference">DataDatabricksPostgresEndpointStatusHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.pendingState">pendingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference">DataDatabricksPostgresEndpointStatusSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.suspendTimeoutDuration">suspendTimeoutDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatus">DataDatabricksPostgresEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimitMaxCu`<sup>Required</sup> <a name="autoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu"></a>

```java
public java.lang.Number getAutoscalingLimitMaxCu();
```

- *Type:* java.lang.Number

---

##### `autoscalingLimitMinCu`<sup>Required</sup> <a name="autoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu"></a>

```java
public java.lang.Number getAutoscalingLimitMinCu();
```

- *Type:* java.lang.Number

---

##### `currentState`<sup>Required</sup> <a name="currentState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.currentState"></a>

```java
public java.lang.String getCurrentState();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.group"></a>

```java
public DataDatabricksPostgresEndpointStatusGroupOutputReference getGroup();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusGroupOutputReference">DataDatabricksPostgresEndpointStatusGroupOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.hosts"></a>

```java
public DataDatabricksPostgresEndpointStatusHostsOutputReference getHosts();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusHostsOutputReference">DataDatabricksPostgresEndpointStatusHostsOutputReference</a>

---

##### `pendingState`<sup>Required</sup> <a name="pendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.pendingState"></a>

```java
public java.lang.String getPendingState();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.settings"></a>

```java
public DataDatabricksPostgresEndpointStatusSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference">DataDatabricksPostgresEndpointStatusSettingsOutputReference</a>

---

##### `suspendTimeoutDuration`<sup>Required</sup> <a name="suspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.suspendTimeoutDuration"></a>

```java
public java.lang.String getSuspendTimeoutDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresEndpointStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatus">DataDatabricksPostgresEndpointStatus</a>

---


### DataDatabricksPostgresEndpointStatusSettingsOutputReference <a name="DataDatabricksPostgresEndpointStatusSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_postgres_endpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference;

new DataDatabricksPostgresEndpointStatusSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.resetPgSettings">resetPgSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPgSettings` <a name="resetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.resetPgSettings"></a>

```java
public void resetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput">pgSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.pgSettings">pgSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings">DataDatabricksPostgresEndpointStatusSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pgSettingsInput`<sup>Optional</sup> <a name="pgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pgSettings`<sup>Required</sup> <a name="pgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.pgSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPgSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettingsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPostgresEndpointStatusSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoint.DataDatabricksPostgresEndpointStatusSettings">DataDatabricksPostgresEndpointStatusSettings</a>

---



